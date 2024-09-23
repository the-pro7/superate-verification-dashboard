import { ReactNode } from "react";

export interface ILoginProps {
  username: string;
  email: string;
  password: string;
}

export interface ILoginDataProps {
  access: string;
  refresh: string;
  user: {
    email: string;
  };
}

// Common properties interface
export interface IVerificationBase {
  id: number;
  country: string;
  selfie_image: string;
  location: string;
  is_denied: boolean;
  is_approved: boolean;
  declination_reason: string;
  created_at: string;
  declined_date: string;
}

// brand verification interface
export type IBrandVerificationType = {
  government_issued_business_id_image: string;
  government_issued_business_id_number: string;
  full_legal_name: string;
  phone_number: string;
  website: string;
  address: string;
  brand: number;
} & IVerificationBase;

// Influencer verification interface
export type IInfluencerVerificationType = {
  full_name: string;
  user: number;
  government_issued_id_image: string;
  government_issued_id_number: string;
} & IVerificationBase;

// Types aliases
export type RoleType = "brand" | "influencer";

// Actions
export interface IActionButtonProps {
  roleId: string;
  title: string;
  description: string;
  dialogTrigger: ReactNode;
  accessToken: string;
  role: string;
}

export interface IRefreshType {
  access: string,
  access_expiration: string
}
