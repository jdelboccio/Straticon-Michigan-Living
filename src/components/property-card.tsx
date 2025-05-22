import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  amenities: string[];
  available: boolean;
  availableDate?: string;
  address: string;
}

export default function PropertyCard({
  id,
  name,
  location,
  description,
  imageUrl,
  amenities,
  available,
  availableDate,
  address
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group">
      <Link href={`/property/${id}`}>
        <div className="relative">
          {/* Image */}
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Availability Badge */}
          {!available && (
            <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm">
              Coming {availableDate}
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Property Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold font-playfair">{name}</h3>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-gray-600 text-sm line-clamp-2">
            {description}
          </p>

          {/* Amenities */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {amenities.slice(0, 3).map((amenity) => (
                <span
                  key={amenity}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action */}
          {available ? (
            <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-1" />
              Check Availability
              <span className="ml-1 group-hover:ml-2 transition-all">→</span>
            </div>
          ) : (
            <div className="mt-4 text-gray-500 text-sm">
              Under Renovation
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
}
