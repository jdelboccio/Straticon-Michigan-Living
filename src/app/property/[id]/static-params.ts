import { Property } from "@/types";

export const propertyData: Record<string, Property> = {
  "1": {
    id: "1",
    name: "The Chalet",
    location: "Kewadin, MI",
    description: "A stunning waterfront property with panoramic views of Lake Michigan. Perfect for a peaceful getaway with private beach access and modern amenities.",
    imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    amenities: ["Private Beach", "4 Bedrooms", "Lake View", "Modern Kitchen", "Wi-Fi"],
    maxStay: {
      "Legacy Circle": 7,
      "Heritage Club": 3,
      "Foundation Society": 3
    },
    address: "12512 Pine Ridge Trail, Kewadin, MI 49648",
    available: true
  },
  "2": {
    id: "2",
    name: "Pebble Beach",
    location: "Kewadin, MI",
    description: "Currently under renovation to provide you with an even more exceptional experience.",
    imageUrl: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
    amenities: ["Forest View", "3 Bedrooms", "Fireplace", "Hot Tub", "Hiking Trails"],
    maxStay: {
      "Legacy Circle": 7,
      "Heritage Club": 3,
      "Foundation Society": 3
    },
    address: "3017 Forest Beach Trail, Kewadin, MI 49648",
    available: false,
    availableDate: "October 1st, 2025"
  },
  "3": {
    id: "3",
    name: "The Cabin",
    location: "Kewadin, MI",
    description: "Currently under renovation to enhance your stay experience.",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    amenities: ["City View", "2 Bedrooms", "Gym Access", "Parking", "Concierge"],
    maxStay: {
      "Legacy Circle": 7,
      "Heritage Club": 3,
      "Foundation Society": 3
    },
    address: "12512 Pine Ridge Trail, Kewadin, MI 49648",
    available: false,
    availableDate: "October 1st, 2025"
  }
};

export function generateStaticParams() {
  return Object.keys(propertyData).map((id) => ({
    id,
  }));
}
