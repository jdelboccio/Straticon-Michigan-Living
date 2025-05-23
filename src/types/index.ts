export type MembershipTier = 'Legacy Circle' | 'Heritage Club' | 'Foundation Society';

export interface Booking {
  id: string;
  propertyId: string;
  userEmail: string;
  userName: string;
  checkIn: Date;
  checkOut: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  termsAccepted: boolean;
  signature: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  amenities: string[];
  maxStay: {
    [key in MembershipTier]: number;
  };
  address: string;
  available: boolean;
  availableDate?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  membershipTier: MembershipTier;
  yearsOfService: number;
}
