"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";

function LoginForm() {
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
    <Card className="p-8 bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
      <div className="space-y-6">
        <button
          onClick={handleMicrosoftLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold
            bg-cherry-red text-white transform hover:scale-105 transition-all duration-300
            hover:bg-cherry-dark focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-cherry-red disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg hover:shadow-xl"
        >
          {isLoading ? "Signing in..." : "Sign In with Microsoft"}
        </button>
      </div>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(50%)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-md space-y-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 font-playfair">Welcome Back</h1>
          <p className="text-2xl text-gray-600 font-light">
            Sign in to begin your Michigan experience
          </p>
        </div>

        <Suspense fallback={
          <Card className="p-8 bg-white/95 backdrop-blur-lg border-0 shadow-2xl">
            <div className="space-y-6">
              <button
                disabled
                className="w-full flex items-center justify-center px-6 py-4 text-lg
                  bg-cherry-red text-white opacity-50 cursor-not-allowed shadow-lg"
              >
                Loading...
              </button>
            </div>
          </Card>
        }>
          <LoginForm />
        </Suspense>

        <div className="text-center space-y-4">
          <Link 
            href="/"
            className="text-cherry-red hover:text-cherry-dark text-lg font-medium 
              transition-colors duration-200"
          >
            Return to Home
          </Link>
          <p className="mt-6 text-base text-gray-600">
            Having trouble signing in? Contact the Employee Outreach team.
          </p>
        </div>
      </div>
    </div>
  );
}
