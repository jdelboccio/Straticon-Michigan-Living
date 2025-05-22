"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  Home,
  Calendar,
  AlertCircle,
  TrendingUp,
  Clock,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const stats = [
  {
    name: "Total Users",
    value: "156",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    name: "Active Properties",
    value: "1/3",
    change: "2 under renovation",
    trend: "neutral",
    icon: Home,
  },
  {
    name: "Monthly Bookings",
    value: "24",
    change: "+8%",
    trend: "up",
    icon: Calendar,
  },
  {
    name: "Pending Requests",
    value: "5",
    change: "Action needed",
    trend: "attention",
    icon: AlertCircle,
  },
];

const recentActivity = [
  {
    user: "John Smith",
    action: "Booked The Chalet",
    date: "2 hours ago",
    tier: "Legacy Circle",
  },
  {
    user: "Sarah Johnson",
    action: "Updated profile",
    date: "5 hours ago",
    tier: "Heritage Club",
  },
  {
    user: "Mike Davis",
    action: "Requested booking",
    date: "1 day ago",
    tier: "Foundation Society",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-playfair">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the Michigan Living admin portal
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`text-sm ${
                    stat.trend === "up"
                      ? "text-green-600"
                      : stat.trend === "attention"
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <Clock className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div>
                <p className="font-medium text-gray-900">{activity.user}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{activity.date}</p>
                <p className="text-sm font-medium text-blue-600">
                  {activity.tier}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left rounded-lg hover:bg-gray-50 border">
            <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
            <p className="font-medium">View Reports</p>
            <p className="text-sm text-gray-600">
              Generate booking and usage reports
            </p>
          </button>
          <button className="p-4 text-left rounded-lg hover:bg-gray-50 border">
            <Calendar className="w-5 h-5 text-blue-600 mb-2" />
            <p className="font-medium">Manage Bookings</p>
            <p className="text-sm text-gray-600">
              Review and approve booking requests
            </p>
          </button>
          <button className="p-4 text-left rounded-lg hover:bg-gray-50 border">
            <Home className="w-5 h-5 text-blue-600 mb-2" />
            <p className="font-medium">Property Status</p>
            <p className="text-sm text-gray-600">
              Update property availability
            </p>
          </button>
        </div>
      </Card>
    </div>
  );
}
