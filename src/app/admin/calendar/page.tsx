"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DayPicker, SelectMultipleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";

const properties = [
  { id: "1", name: "The Chalet" },
  { id: "2", name: "Pebble Beach" },
  { id: "3", name: "The Cabin" },
];

interface BookingDay {
  date: Date;
  propertyId: string;
  guestName?: string;
}

export default function AdminCalendar() {
  const [selectedProperty, setSelectedProperty] = useState(properties[0].id);
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);

  const handleSelect: SelectMultipleEventHandler = (days) => {
    setSelectedDays(days || []);
  };

  const handleSaveChanges = () => {
    // In a real app, this would save to your backend
    console.log('Saving bookings:', {
      propertyId: selectedProperty,
      dates: selectedDays
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 font-playfair">Property Availability Calendar</h1>

        <div className="mb-6">
          <label htmlFor="property" className="block mb-2 font-semibold">
            Select Property
          </label>
          <select
            id="property"
            value={selectedProperty}
            onChange={(e) => setSelectedProperty(e.target.value)}
            className="border rounded p-2 w-64"
          >
            {properties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold font-playfair">Select Dates</h2>
              <p className="text-sm text-gray-600">Click dates to mark as booked/available</p>
            </div>
            <DayPicker
              mode="multiple"
              selected={selectedDays}
              onSelect={handleSelect}
              modifiers={{
                booked: selectedDays,
              }}
              modifiersStyles={{
                booked: {
                  backgroundColor: '#EF4444',
                  color: 'white'
                }
              }}
              className="border rounded p-2"
            />
          </Card>

          <Card className="p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold font-playfair">Booking Rules</h2>
              <div className="space-y-2 text-sm text-gray-600 mt-2">
                <p>• Legacy Circle (20+ years): Up to 7-day stays</p>
                <p>• Other tiers: Weekend stays only (Fri-Mon)</p>
                <p>• Booking windows open by seniority</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Selected Dates:</h3>
              {selectedDays.length > 0 ? (
                <ul className="space-y-1 text-sm text-gray-600">
                  {selectedDays.map((date) => (
                    <li key={date.toISOString()}>
                      {date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No dates selected</p>
              )}
            </div>

            <div className="mt-6">
              <Button 
                onClick={handleSaveChanges}
                className="w-full"
                disabled={selectedDays.length === 0}
              >
                Save Changes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
