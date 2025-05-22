"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Edit,
  Image as ImageIcon,
  Calendar as CalendarIcon,
  Plus,
  Trash2,
  Save,
  X
} from "lucide-react";
import type { Property } from "@/types";

// Mock data - in a real app, this would come from an API
const initialProperties: Property[] = [
  {
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
  {
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
  {
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
  },
];

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const { toast } = useToast();

  const handleEdit = (property: Property) => {
    setEditingProperty({ ...property });
  };

  const handleSave = async (property: Property) => {
    try {
      // In a real app, this would be an API call
      setProperties(properties.map(p => 
        p.id === property.id ? property : p
      ));
      
      toast({
        title: "Success",
        description: "Property updated successfully",
      });
      
      setEditingProperty(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update property",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (propertyId: string) => {
    if (!confirm("Are you sure you want to delete this property?")) {
      return;
    }

    try {
      // In a real app, this would be an API call
      setProperties(properties.filter(p => p.id !== propertyId));
      
      toast({
        title: "Success",
        description: "Property deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    }
  };

  const handleToggleAvailability = async (property: Property) => {
    try {
      const updatedProperty = {
        ...property,
        available: !property.available,
      };

      // In a real app, this would be an API call
      setProperties(properties.map(p => 
        p.id === property.id ? updatedProperty : p
      ));
      
      toast({
        title: "Success",
        description: `Property marked as ${updatedProperty.available ? 'available' : 'unavailable'}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update availability",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-playfair">Properties</h1>
          <p className="text-gray-600 mt-2">
            Manage property details and availability
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={property.imageUrl}
                alt={property.name}
                fill
                className="object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                <ImageIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {editingProperty?.id === property.id ? (
                // Edit Mode
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={editingProperty.name}
                      onChange={(e) => setEditingProperty({
                        ...editingProperty,
                        name: e.target.value
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={editingProperty.location}
                      onChange={(e) => setEditingProperty({
                        ...editingProperty,
                        location: e.target.value
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <textarea
                      id="description"
                      className="w-full min-h-[100px] px-3 py-2 rounded-md border"
                      value={editingProperty.description}
                      onChange={(e) => setEditingProperty({
                        ...editingProperty,
                        description: e.target.value
                      })}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleSave(editingProperty)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setEditingProperty(null)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                // View Mode
                <>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{property.name}</h3>
                      <p className="text-gray-600">{property.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEdit(property)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => handleDelete(property.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-700">{property.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {property.available
                          ? "Available Now"
                          : `Available from ${property.availableDate}`}
                      </span>
                    </div>
                    <Button
                      variant={property.available ? "outline" : "default"}
                      size="sm"
                      onClick={() => handleToggleAvailability(property)}
                    >
                      {property.available ? "Mark Unavailable" : "Mark Available"}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
