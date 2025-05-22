import PDFDocument from 'pdfkit';
import { Booking } from '@/types';

interface ItineraryData {
  booking: Booking;
  propertyName: string;
  propertyAddress: string;
  guestName: string;
  checkIn: Date;
  checkOut: Date;
  signature: string;
}

export async function generateItineraryPDF(data: ItineraryData): Promise<Buffer> {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 50,
    info: {
      Title: `Michigan Living - ${data.propertyName} Booking Confirmation`,
      Author: 'Straticon',
    },
  });

  const buffers: Buffer[] = [];
  doc.on('data', buffers.push.bind(buffers));

  // Header
  doc
    .fontSize(24)
    .font('Helvetica-Bold')
    .text('Michigan Living', { align: 'center' })
    .fontSize(16)
    .font('Helvetica')
    .text('A Straticon Family Experience', { align: 'center' })
    .moveDown(2);

  // Booking Details
  doc
    .fontSize(18)
    .font('Helvetica-Bold')
    .text('Booking Confirmation')
    .moveDown(1);

  doc.fontSize(12).font('Helvetica');

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Guest Information
  doc
    .text('Guest Information', { underline: true })
    .moveDown(0.5)
    .text(`Guest Name: ${data.guestName}`)
    .moveDown(0.5)
    .text(`Booking Reference: ${data.booking.id}`)
    .moveDown(1.5);

  // Property Details
  doc
    .text('Property Details', { underline: true })
    .moveDown(0.5)
    .text(`Property: ${data.propertyName}`)
    .text(`Address: ${data.propertyAddress}`)
    .moveDown(1.5);

  // Stay Details
  doc
    .text('Stay Details', { underline: true })
    .moveDown(0.5)
    .text(`Check-in: ${formatDate(data.checkIn)} at 3:00 PM`)
    .text(`Check-out: ${formatDate(data.checkOut)} at 11:00 AM`)
    .moveDown(1.5);

  // Important Information
  doc
    .text('Important Information', { underline: true })
    .moveDown(0.5)
    .text('• Property stay is complimentary')
    .text('• Guest is responsible for travel arrangements')
    .text('• Check-in time: 3:00 PM')
    .text('• Check-out time: 11:00 AM')
    .text('• Maximum occupancy must be observed')
    .text('• No smoking inside the property')
    .text('• Pets are not allowed unless approved')
    .moveDown(1.5);

  // Local Area Information
  doc
    .text('Local Area Information', { underline: true })
    .moveDown(0.5)
    .text('Recommended Restaurants:')
    .text('• Pearl's New Orleans Kitchen - 617 Ames St, Elk Rapids')
    .text('• The Torch Lake Café - 4264 US-31, Central Lake')
    .text('• Blue Pelican Inn - 2535 N M-88 Hwy, Central Lake')
    .moveDown(1)
    .text('Activities:')
    .text('• Torch Lake Water Sports - Boat rentals and water activities')
    .text('• Grand Traverse Bike Tours - Scenic cycling routes')
    .text('• Grass River Natural Area - Beautiful hiking trails')
    .moveDown(1.5);

  // Travel Information
  doc
    .text('Travel Information', { underline: true })
    .moveDown(0.5)
    .text('Allegiant Airlines offers direct flights from:')
    .text('Fort Lauderdale (FLL) to Traverse City (TVC)')
    .text('Available on Mondays and Fridays')
    .moveDown(1.5);

  // Emergency Contacts
  doc
    .text('Emergency Contacts', { underline: true })
    .moveDown(0.5)
    .text('Employee Outreach Team: (555) 123-4567')
    .text('Local Emergency Services: 911')
    .moveDown(1.5);

  // Terms Acceptance
  doc
    .text('Terms Acceptance', { underline: true })
    .moveDown(0.5)
    .text(`Digital Signature: ${data.signature}`)
    .text(`Date: ${new Date().toLocaleDateString()}`);

  // Footer
  const bottomOfPage = doc.page.height - 50;
  doc
    .fontSize(8)
    .text(
      'This is an official booking confirmation from Michigan Living, a Straticon Family Experience program.',
      50,
      bottomOfPage,
      { align: 'center' }
    );

  doc.end();

  return new Promise((resolve, reject) => {
    const pdfBuffers: Buffer[] = [];
    doc.on('data', (chunk) => pdfBuffers.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(pdfBuffers)));
    doc.on('error', reject);
  });
}
