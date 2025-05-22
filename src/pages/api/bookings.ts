import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { sendBookingConfirmation } from "@/lib/email";
import { getBookingConfirmationTemplate } from "@/lib/email-templates";
import type { User, Booking } from "@/types";

interface BookingRequest {
  propertyId: string;
  checkIn: string;
  checkOut: string;
}

const getTierPriority = (tier: string) => {
  switch (tier) {
    case 'Legacy Circle': return 3;
    case 'Heritage Club': return 2;
    case 'Foundation Society': return 1;
    default: return 0;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get authenticated user
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { propertyId, checkIn, checkOut } = req.body as BookingRequest;

    // Validate required fields
    if (!propertyId || !checkIn || !checkOut) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();

    if (checkInDate < today) {
      return res.status(400).json({ message: "Cannot book dates in the past" });
    }

    if (checkOutDate <= checkInDate) {
      return res.status(400).json({ message: "Check-out must be after check-in" });
    }

    // Get user details including membership tier
    const user = session.user as User;
    const userTierPriority = getTierPriority(user.membershipTier);

    // TODO: Check for existing bookings in the database
    // This is a placeholder for the database query
    const existingBookings: Booking[] = []; // Replace with actual DB query
    
    // Check for booking conflicts
    const hasConflict = existingBookings.some(booking => {
      const existingCheckIn = new Date(booking.checkIn);
      const existingCheckOut = new Date(booking.checkOut);
      
      // Check if dates overlap
      if (checkInDate <= existingCheckOut && checkOutDate >= existingCheckIn) {
        // If there's an overlap, check if current user has higher priority
        const existingUserTierPriority = getTierPriority(booking.userName); // Assuming userName contains tier info for now
        return userTierPriority <= existingUserTierPriority;
      }
      return false;
    });

    if (hasConflict) {
      return res.status(403).json({ 
        message: "These dates are already booked by someone with equal or higher priority" 
      });
    }

    // Create booking
    const newBooking: Partial<Booking> = {
      propertyId,
      userEmail: user.email!,
      userName: user.name!,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      status: 'confirmed',
      termsAccepted: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // TODO: Save booking to database
    // const savedBooking = await db.bookings.create(newBooking);

    // Send confirmation email
    const bookingDetails = {
      propertyName: propertyId, // TODO: Fetch actual property name
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guestName: user.name!,
      propertyAddress: "Property address here", // TODO: Fetch actual address
    };

    await sendBookingConfirmation(
      user.email!,
      "Your Michigan Living Booking Confirmation",
      getBookingConfirmationTemplate(bookingDetails)
    );

    return res.status(200).json({ 
      message: "Booking confirmed and email sent",
      booking: newBooking
    });

  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
