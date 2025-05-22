"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Save,
  Undo,
  FileText,
  Layout,
  Type,
} from "lucide-react";

const initialContent = {
  welcomeLetter: `Dear Valued Straticon Family Member,

If you're reading this, you're not just an employee – you're part of our extended family at Straticon. As a testament to your dedication and the countless hours you've invested in building not just structures, but our company's legacy, we want to share something special with you.

We're opening the doors to our cherished Michigan properties, offering you and your loved ones a chance to experience the tranquility and beauty of these special places we call home. This isn't just about a vacation – it's about showing our appreciation for your commitment to Straticon and recognizing that you're an integral part of our success story.

Consider this your personal invitation to create lasting memories in these beautiful retreats. Your dedication has helped build Straticon, and now we want you to enjoy the fruits of that success with us.

With gratitude,
The Hardin Family`,
  tiers: [
    {
      name: "Legacy Circle",
      description: "20+ Years of Excellence",
      details: "First Access to All Properties",
    },
    {
      name: "Heritage Club",
      description: "10+ Years of Dedication",
      details: "Priority Booking Access",
    },
    {
      name: "Foundation Society",
      description: "5+ Years of Growth",
      details: "Standard Booking Access",
    },
  ],
};

export default function ContentPage() {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // In a real app, this would save to an API
    setIsEditing(false);
    alert("Changes saved successfully!");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-playfair">Content Management</h1>
          <p className="text-gray-600 mt-2">
            Edit website content and messaging
          </p>
        </div>
        <div className="space-x-4">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setContent(initialContent);
                  setIsEditing(false);
                }}
              >
                <Undo className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <FileText className="w-4 h-4 mr-2" />
              Edit Content
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-8">
        {/* Welcome Letter */}
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <Type className="w-5 h-5 mr-2 text-blue-600" />
            <h2 className="text-xl font-semibold">Welcome Letter</h2>
          </div>
          <Textarea
            value={content.welcomeLetter}
            onChange={(e) =>
              setContent({ ...content, welcomeLetter: e.target.value })
            }
            className="min-h-[400px] font-serif"
            disabled={!isEditing}
          />
        </Card>

        {/* Membership Tiers */}
        <Card className="p-6">
          <div className="flex items-center mb-6">
            <Layout className="w-5 h-5 mr-2 text-blue-600" />
            <h2 className="text-xl font-semibold">Membership Tiers</h2>
          </div>
          <div className="grid gap-6">
            {content.tiers.map((tier, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Tier Name
                    </label>
                    <Input
                      value={tier.name}
                      onChange={(e) => {
                        const newTiers = [...content.tiers];
                        newTiers[index].name = e.target.value;
                        setContent({ ...content, tiers: newTiers });
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <Input
                      value={tier.description}
                      onChange={(e) => {
                        const newTiers = [...content.tiers];
                        newTiers[index].description = e.target.value;
                        setContent({ ...content, tiers: newTiers });
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Access Details
                    </label>
                    <Input
                      value={tier.details}
                      onChange={(e) => {
                        const newTiers = [...content.tiers];
                        newTiers[index].details = e.target.value;
                        setContent({ ...content, tiers: newTiers });
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
