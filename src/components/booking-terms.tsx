"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, FileText } from "lucide-react";

interface BookingTermsProps {
  onAccept: () => void;
  onDecline: () => void;
  propertyName: string;
  checkIn: Date;
  checkOut: Date;
}

export function BookingTerms({ onAccept, onDecline, propertyName, checkIn, checkOut }: BookingTermsProps) {
  const [isAgreed, setIsAgreed] = useState(false);
  const [signature, setSignature] = useState("");

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="text-2xl font-semibold font-playfair">Booking Terms & Conditions</h2>
            <p className="text-gray-600">Please review and accept the terms below</p>
          </div>
          <FileText className="w-8 h-8 text-blue-600" />
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Booking Details</h3>
            <p><strong>Property:</strong> {propertyName}</p>
            <p><strong>Check-in:</strong> {formatDate(checkIn)} at 3:00 PM</p>
            <p><strong>Check-out:</strong> {formatDate(checkOut)} at 11:00 AM</p>
          </div>

          <div className="space-y-4 text-gray-700">
            <h3 className="font-semibold">Terms of Stay</h3>
            <div className="space-y-2">
              <p>1. Property stay is complimentary for eligible Straticon employees.</p>
              <p>2. Guest is responsible for all travel arrangements and expenses.</p>
              <p>3. Maximum occupancy must be strictly observed.</p>
              <p>4. No smoking is permitted inside the property.</p>
              <p>5. Pets are not allowed unless specifically approved.</p>
              <p>6. Guest is responsible for any damage to the property.</p>
              <p>7. Cancellations must be made at least 7 days in advance.</p>
              <p>8. Check-in time is 3:00 PM and check-out time is 11:00 AM.</p>
              <p>9. Property must be left in a clean and orderly condition.</p>
              <p>10. All house rules posted at the property must be followed.</p>
            </div>

            <h3 className="font-semibold mt-6">Guest Responsibilities</h3>
            <div className="space-y-2">
              <p>• Respect quiet hours between 10:00 PM and 8:00 AM</p>
              <p>• Report any issues or damages immediately</p>
              <p>• Follow all posted safety guidelines</p>
              <p>• Secure the property when leaving</p>
              <p>• Do not duplicate keys or access cards</p>
            </div>

            <h3 className="font-semibold mt-6">Liability Waiver</h3>
            <p className="text-sm">
              By accepting these terms, you acknowledge that you are using the property at your own risk and 
              release Straticon from any liability for personal injury or loss of personal property during your stay.
            </p>
          </div>

          <div className="border-t pt-4 mt-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="agree"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label htmlFor="agree" className="ml-2 text-gray-700">
                I have read and agree to the terms and conditions
              </label>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Digital Signature
                </label>
                <input
                  type="text"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Type your full name to sign"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={onAccept}
                  disabled={!isAgreed || !signature}
                  className="flex-1"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Accept & Continue
                </Button>
                <Button
                  variant="outline"
                  onClick={onDecline}
                  className="flex-1"
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
