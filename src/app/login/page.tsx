"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/dashboard";

  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("azure-ad", { callbackUrl });
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to begin your Michigan experience</p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <button
              onClick={handleMicrosoftLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In with Microsoft"}
            </button>
          </div>
        </Card>

        <div className="text-center">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            Return to Home
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Having trouble signing in? Contact the Employee Outreach team.
          </p>
        </div>
      </div>
    </div>
  );
}
