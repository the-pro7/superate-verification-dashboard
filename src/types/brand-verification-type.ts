export interface IBrandVerificationType {
  id: number;
  full_legal_name: string;
  country: string;
  selfie_image: string;
  government_issued_business_id_number: string;
  government_issued_business_id_image: string;
  location: string;
  phone_number: string;
  website: string;
  address: string;
  is_denied: boolean;
  is_approved: boolean;
  declination_reason: string;
  created_at: string;
  declined_date: string;
  brand: number;
}
