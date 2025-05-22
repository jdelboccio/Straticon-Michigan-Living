"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Building,
  Users,
  FileText,
  Calendar,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Properties", href: "/admin/properties", icon: Building },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Content", href: "/admin/content", icon: FileText },
  { name: "Calendar", href: "/admin/calendar", icon: Calendar },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (!session?.user) {
    return null; // Handle unauthorized access
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r">
        <div className="flex flex-col h-full">
          {/* Logo and Preview Controls */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold font-playfair text-blue-600">
                  Michigan Living
                </h1>
                <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>
              </div>
              <div className="flex space-x-2">
                <Link href="/api/preview?redirect=/" className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
                  Preview Site
                </Link>
                <Link href="/api/exit-preview?redirect=/admin" className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                  Exit Preview
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className={`w-5 h-5 mr-3 ${
                    isActive ? "text-blue-600" : "text-gray-400"
                  }`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {session.user.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {session.user.email}
                </p>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
