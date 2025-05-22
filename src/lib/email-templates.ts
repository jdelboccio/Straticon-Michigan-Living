interface BookingDetails {
  propertyName: string;
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  propertyAddress: string;
}

export function getBookingConfirmationTemplate(booking: BookingDetails): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 20px;">Your Michigan Living Retreat is Confirmed!</h1>
      
      <p style="color: #4a5568; font-size: 16px; margin-bottom: 20px;">
        Dear ${booking.guestName},
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        We're delighted to confirm your upcoming stay at ${booking.propertyName}. We hope you'll create wonderful memories during your time here.
      </p>

      <div style="background-color: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Booking Details</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 10px;">
            <strong>Check-in:</strong> ${booking.checkIn.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </li>
          <li style="margin-bottom: 10px;">
            <strong>Check-out:</strong> ${booking.checkOut.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </li>
          <li style="margin-bottom: 10px;">
            <strong>Property:</strong> ${booking.propertyName}
          </li>
          <li>
            <strong>Address:</strong> ${booking.propertyAddress}
          </li>
        </ul>
      </div>

      <div style="background-color: #ebf8ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2c5282; font-size: 18px; margin-bottom: 15px;">Travel Information</h2>
        <p style="color: #2a4365; font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
          <strong>Direct Flights Available:</strong> Allegiant Airlines offers direct flights from Fort Lauderdale (FLL) to Traverse City (TVC) on Mondays and Fridays.
        </p>
        <p style="color: #2a4365; font-size: 14px;">
          <a href="https://www.allegiantair.com" style="color: #3182ce; text-decoration: none;">Book your flight →</a>
        </p>
      </div>

      <div style="background-color: #f0fff4; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #276749; font-size: 18px; margin-bottom: 15px;">Important Notes</h2>
        <ul style="color: #2f855a; font-size: 14px; line-height: 1.5; margin: 0; padding-left: 20px;">
          <li>Property stay is complimentary</li>
          <li>All other expenses (travel, food, activities) are guest responsibility</li>
          <li>Check-in time: 3:00 PM</li>
          <li>Check-out time: 11:00 AM</li>
        </ul>
      </div>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        If you need to make any changes to your booking or have questions, please don't hesitate to contact the Employee Outreach team.
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        Best regards,<br>
        The Hardin Family
      </p>
    </div>
  `;
}

export function getBookingUpdateTemplate(booking: BookingDetails, updateType: 'modification' | 'cancellation'): string {
  const subject = updateType === 'modification' ? 'Booking Update Confirmation' : 'Booking Cancellation Confirmation';
  const message = updateType === 'modification' 
    ? 'Your booking has been updated with the following details:'
    : 'Your booking has been cancelled. We hope to welcome you another time!';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 20px;">${subject}</h1>
      
      <p style="color: #4a5568; font-size: 16px; margin-bottom: 20px;">
        Dear ${booking.guestName},
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        ${message}
      </p>

      ${updateType === 'modification' ? `
        <div style="background-color: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Updated Booking Details</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 10px;">
              <strong>New Check-in:</strong> ${booking.checkIn.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </li>
            <li style="margin-bottom: 10px;">
              <strong>New Check-out:</strong> ${booking.checkOut.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </li>
            <li>
              <strong>Property:</strong> ${booking.propertyName}
            </li>
          </ul>
        </div>
      ` : ''}

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        If you have any questions, please contact the Employee Outreach team.
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        Best regards,<br>
        The Hardin Family
      </p>
    </div>
  `;
}
