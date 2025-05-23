"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variants: {
    variant: {
      default: "bg-cherry-red text-white hover:bg-cherry-dark transition-all duration-300 transform hover:scale-105 shadow-xl",
      outline: "border-2 border-cherry-red text-cherry-red hover:bg-cherry-red hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl",
      ghost: "hover:bg-cherry-red/10 hover:text-cherry-red transition-all duration-300"
    },
    size: {
      default: "h-12 px-6 py-3 text-base",
      sm: "h-10 px-4 py-2 text-sm",
      lg: "h-14 px-8 py-4 text-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-cherry-red text-white hover:bg-cherry-dark hover:shadow-2xl transform hover:scale-105":
              variant === "default",
            "border-2 border-cherry-red bg-transparent text-cherry-red hover:bg-cherry-red hover:text-white hover:shadow-2xl transform hover:scale-105":
              variant === "outline",
            "hover:bg-cherry-red/10 hover:text-cherry-red":
              variant === "ghost",
            "h-12 px-6 py-3 text-base": size === "default",
            "h-10 px-4 py-2 text-sm": size === "sm",
            "h-14 px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
