import { Card } from "@/components/ui/card";
import { MapPin, Utensils, Palmtree, Coffee } from "lucide-react";

interface LocalGuideProps {
  propertyName: string;
  propertyAddress: string;
}

const localAttractions = {
  restaurants: [
    {
      name: "Pearl's New Orleans Kitchen",
      description: "Casual dining with Cajun flair",
      address: "617 Ames St, Elk Rapids, MI 49629",
      distance: "15 min drive"
    },
    {
      name: "The Torch Lake Café",
      description: "Local favorite for breakfast",
      address: "4264 US-31, Central Lake, MI 49622",
      distance: "10 min drive"
    },
    {
      name: "Blue Pelican Inn",
      description: "Historic atmosphere with great steaks",
      address: "2535 N M-88 Hwy, Central Lake, MI 49622",
      distance: "12 min drive"
    }
  ],
  activities: [
    {
      name: "Torch Lake Water Sports",
      description: "Boat rentals and water activities",
      address: "12906 Cherry Ave, Rapid City, MI 49676",
      website: "https://torchlakewatersports.com"
    },
    {
      name: "Grand Traverse Bike Tours",
      description: "Scenic cycling routes",
      address: "228 E Front St, Traverse City, MI 49684",
      website: "https://grandtraversebiketours.com"
    },
    {
      name: "Grass River Natural Area",
      description: "Beautiful hiking trails",
      address: "6500 Alden Hwy, Bellaire, MI 49615",
      website: "https://grassriver.org"
    }
  ],
  cafes: [
    {
      name: "Moka",
      description: "Local coffee roaster & café",
      address: "129 River St, Elk Rapids, MI 49629",
      distance: "10 min drive"
    },
    {
      name: "Torch Lake Café",
      description: "Coffee with a view",
      address: "4264 US-31, Central Lake, MI 49622",
      distance: "12 min drive"
    }
  ]
};

export function LocalGuide({ propertyName, propertyAddress }: LocalGuideProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2 font-playfair">Property Location</h2>
            <p className="text-gray-600">{propertyAddress}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(propertyAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mt-2"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start space-x-3">
          <Utensils className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-4 font-playfair">Local Restaurants</h2>
            <div className="space-y-4">
              {localAttractions.restaurants.map((restaurant) => (
                <div key={restaurant.name} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm">{restaurant.description}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {restaurant.address} • {restaurant.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start space-x-3">
          <Palmtree className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-4 font-playfair">Activities</h2>
            <div className="space-y-4">
              {localAttractions.activities.map((activity) => (
                <div key={activity.name} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-900">{activity.name}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                  <p className="text-gray-500 text-sm mt-1">{activity.address}</p>
                  <a 
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm mt-1 inline-block"
                  >
                    Visit website →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start space-x-3">
          <Coffee className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-4 font-playfair">Coffee & Cafés</h2>
            <div className="space-y-4">
              {localAttractions.cafes.map((cafe) => (
                <div key={cafe.name} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-900">{cafe.name}</h3>
                  <p className="text-gray-600 text-sm">{cafe.description}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {cafe.address} • {cafe.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
