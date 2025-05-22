"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";

interface BookingCalendarProps {
  propertyId: string;
  propertyName: string;
  maxStayDays: number;
}

export default function BookingCalendar({ propertyId, propertyName, maxStayDays }: BookingCalendarProps) {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleBookingSubmit = async () => {
    if (!selectedRange?.from || !selectedRange?.to) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId,
          checkIn: selectedRange.from.toISOString(),
          checkOut: selectedRange.to.toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create booking');
      }

      toast({
        title: "Success!",
        description: `Your booking at ${propertyName} has been confirmed`,
      });

      // Reset the calendar
      setSelectedRange(undefined);

    } catch (error: any) {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRangeSelect = (range: DateRange | undefined) => {
    if (!range?.from || !range?.to) {
      setSelectedRange(range);
      return;
    }

    // Calculate the number of days between dates
    const days = Math.ceil((range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24));
    
    if (days > maxStayDays) {
      toast({
        title: "Invalid Date Range",
        description: `Maximum stay is ${maxStayDays} days for your tier`,
        variant: "destructive",
      });
      return;
    }
    
    setSelectedRange(range);
  };

  return (
    <Card className="p-6 bg-white shadow-lg">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Select Your Dates</h3>
          <p className="text-sm text-gray-500">
            Maximum stay: {maxStayDays} days
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <Calendar
            mode="range"
            selected={selectedRange}
            onSelect={handleRangeSelect}
            numberOfMonths={2}
            disabled={(date) => date < new Date()}
            className="rounded-md border"
          />
        </div>

        {selectedRange?.from && selectedRange?.to && (
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Check-in</p>
                <p className="font-medium">{format(selectedRange.from, "MMM dd, yyyy")}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Check-out</p>
                <p className="font-medium">{format(selectedRange.to, "MMM dd, yyyy")}</p>
              </div>
            </div>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleBookingSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Request Booking"}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
