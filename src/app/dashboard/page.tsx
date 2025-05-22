"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyCard from "@/components/property-card";
import Link from "next/link";
import { Calendar, Info, Plane } from "lucide-react";

const properties = [
  {
    id: "1",
    name: "The Chalet",
    location: "Kewadin, MI",
    description: "A stunning waterfront property with panoramic views of Lake Michigan. Perfect for a peaceful getaway with private beach access and modern amenities.",
    imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    amenities: ["Private Beach", "4 Bedrooms", "Lake View", "Modern Kitchen", "Wi-Fi"],
    available: true,
    address: "12512 Pine Ridge Trail, Kewadin, MI 49648"
  },
  {
    id: "2",
    name: "Pebble Beach",
    location: "Kewadin, MI",
    description: "Currently under renovation to provide you with an even more exceptional experience.",
    imageUrl: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
    amenities: ["Forest View", "3 Bedrooms", "Fireplace", "Hot Tub", "Hiking Trails"],
    available: false,
    availableDate: "October 1st, 2025",
    address: "3017 Forest Beach Trail, Kewadin, MI 49648"
  },
  {
    id: "3",
    name: "The Cabin",
    location: "Kewadin, MI",
    description: "Currently under renovation to enhance your stay experience.",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    amenities: ["City View", "2 Bedrooms", "Gym Access", "Parking", "Concierge"],
    available: false,
    availableDate: "October 1st, 2025",
    address: "12512 Pine Ridge Trail, Kewadin, MI 49648"
  }
];

export default function Dashboard() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(" ")[0] || "Guest";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-playfair">Welcome, {firstName}!</h1>
              <p className="text-gray-600 mt-1">Your Michigan retreat awaits</p>
            </div>
            <Button
              variant="outline"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Travel Information */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex items-start space-x-4">
            <Plane className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2 font-playfair">Direct Flights Available</h2>
              <p className="text-gray-700">
                Allegiant Airlines offers direct flights from Fort Lauderdale (FLL) to Traverse City (TVC) on Mondays and Fridays.{" "}
                <a 
                  href="https://www.allegiantair.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Book your flight →
                </a>
              </p>
            </div>
          </div>
        </Card>

        {/* Booking Rules */}
        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <Info className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-4 font-playfair">Booking Guidelines</h2>
              <div className="space-y-3 text-gray-700">
                <p>• Legacy Circle (20+ years): Up to 7-day stays, first booking window</p>
                <p>• Heritage Club & Foundation Society: Weekend stays (Friday-Monday)</p>
                <p>• Booking windows open based on seniority level</p>
                <p>• Property stay is complimentary; all other expenses are guest responsibility</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Properties Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold font-playfair">Available Properties</h2>
            <Link href="/calendar">
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
              />
            ))}
          </div>
        </div>

        {/* Need Help? */}
        <Card className="p-6 bg-gray-50 border-dashed">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 font-playfair">Need Assistance?</h3>
            <p className="text-gray-600 mb-4">
              Our Employee Outreach team is here to help make your stay perfect.
            </p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
