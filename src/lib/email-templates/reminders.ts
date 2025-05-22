interface ReminderDetails {
  propertyName: string;
  propertyAddress: string;
  guestName: string;
  checkIn: Date;
  checkOut: Date;
}

export function getOneWeekReminderTemplate(details: ReminderDetails): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 20px;">Your Michigan Living Retreat is Coming Up!</h1>
      
      <p style="color: #4a5568; font-size: 16px; margin-bottom: 20px;">
        Dear ${details.guestName},
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        We're excited to welcome you to ${details.propertyName} in just one week! Here's everything you need to know for your upcoming stay.
      </p>

      <div style="background-color: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Stay Details</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 10px;">
            <strong>Check-in:</strong> ${details.checkIn.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at 3:00 PM
          </li>
          <li style="margin-bottom: 10px;">
            <strong>Check-out:</strong> ${details.checkOut.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at 11:00 AM
          </li>
          <li style="margin-bottom: 10px;">
            <strong>Property:</strong> ${details.propertyName}
          </li>
          <li>
            <strong>Address:</strong> ${details.propertyAddress}
          </li>
        </ul>
      </div>

      <div style="background-color: #ebf8ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2c5282; font-size: 18px; margin-bottom: 15px;">Local Recommendations</h2>
        <p style="color: #2a4365; font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
          <strong>Restaurants:</strong>
          <ul style="margin-top: 5px;">
            <li>Pearl's New Orleans Kitchen - Casual dining with Cajun flair</li>
            <li>The Torch Lake Café - Local favorite for breakfast</li>
            <li>Blue Pelican Inn - Historic atmosphere with great steaks</li>
          </ul>
        </p>
        <p style="color: #2a4365; font-size: 14px; line-height: 1.5;">
          <strong>Activities:</strong>
          <ul style="margin-top: 5px;">
            <li>Torch Lake Water Sports - Boat rentals and water activities</li>
            <li>Grand Traverse Bike Tours - Scenic cycling routes</li>
            <li>Grass River Natural Area - Beautiful hiking trails</li>
          </ul>
        </p>
      </div>

      <div style="background-color: #f0fff4; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #276749; font-size: 18px; margin-bottom: 15px;">Travel Tips</h2>
        <ul style="color: #2f855a; font-size: 14px; line-height: 1.5; margin: 0; padding-left: 20px;">
          <li>Remember to book your Allegiant Airlines flight if you haven't already</li>
          <li>Consider renting a car for easy access to local attractions</li>
          <li>The weather can be variable - pack layers!</li>
        </ul>
      </div>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        If you need to make any changes to your booking or have questions, please contact the Employee Outreach team.
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        Looking forward to your stay!<br>
        The Hardin Family
      </p>
    </div>
  `;
}

export function getOneDayReminderTemplate(details: ReminderDetails): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 20px;">Your Stay Begins Tomorrow!</h1>
      
      <p style="color: #4a5568; font-size: 16px; margin-bottom: 20px;">
        Dear ${details.guestName},
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        We're looking forward to welcoming you to ${details.propertyName} tomorrow! Here's a quick reminder of the important details for your stay.
      </p>

      <div style="background-color: #f7fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Check-in Information</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 10px;">
            <strong>Check-in Time:</strong> Tomorrow at 3:00 PM
          </li>
          <li style="margin-bottom: 10px;">
            <strong>Property:</strong> ${details.propertyName}
          </li>
          <li>
            <strong>Address:</strong> ${details.propertyAddress}
          </li>
        </ul>
      </div>

      <div style="background-color: #ebf8ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2c5282; font-size: 18px; margin-bottom: 15px;">Need to Know</h2>
        <ul style="color: #2a4365; font-size: 14px; line-height: 1.5; margin: 0; padding-left: 20px;">
          <li>Check-out will be at 11:00 AM on ${details.checkOut.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</li>
          <li>The property is equipped with basic amenities</li>
          <li>Parking is available on-site</li>
          <li>Wi-Fi password will be available at check-in</li>
        </ul>
      </div>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        If you need any assistance during your stay, our Employee Outreach team is here to help.
      </p>

      <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
        Safe travels!<br>
        The Hardin Family
      </p>
    </div>
  `;
}
