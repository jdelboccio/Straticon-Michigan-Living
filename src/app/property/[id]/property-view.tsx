"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Wifi, Car, Coffee, Info } from "lucide-react";
import { LocalGuide } from "@/components/local-guide";
import BookingCalendar from "@/components/booking-calendar";
import type { MembershipTier, Property } from "@/types";

export default function PropertyView({ property }: { property: Property }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // For static export, we'll use a default tier
  const userTier: MembershipTier = "Foundation Society";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold font-playfair mb-2">{property.name}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={property.imageUrl}
                alt={property.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600">{property.description}</p>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 font-playfair">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    {amenity.includes("Wi-Fi") && <Wifi className="w-4 h-4 text-blue-600" />}
                    {amenity.includes("Kitchen") && <Coffee className="w-4 h-4 text-blue-600" />}
                    {amenity.includes("Bedrooms") && <Users className="w-4 h-4 text-blue-600" />}
                    {amenity.includes("Parking") && <Car className="w-4 h-4 text-blue-600" />}
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 font-playfair">Important Information</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Property stay is complimentary</li>
                    <li>• All other expenses (travel, food, activities) are guest responsibility</li>
                    <li>• Check-in: 3:00 PM</li>
                    <li>• Check-out: 11:00 AM</li>
                    <li>• Maximum stay: {property.maxStay[userTier]} days</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Calendar */}
          <div className="space-y-6">
            <BookingCalendar
              propertyId={property.id}
              propertyName={property.name}
              maxStayDays={property.maxStay[userTier]}
            />

            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-semibold mb-2 font-playfair">Travel Information</h3>
              <p className="text-gray-700 mb-4">
                Allegiant Airlines offers direct flights from Fort Lauderdale (FLL) to Traverse City (TVC) on Mondays and Fridays.
              </p>
              <a
                href="https://www.allegiantair.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Book Your Flight →
              </a>
            </Card>
          </div>

          {/* Local Area Guide */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 font-playfair">Local Area Guide</h2>
            <LocalGuide 
              propertyName={property.name}
              propertyAddress={property.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
