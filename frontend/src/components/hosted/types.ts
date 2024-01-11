// Keep in sync with saas backend
export interface UserResponse {
  email: string;
  first_name: string;
  last_name: string;
  subscriber_tier: string;
  stripe_customer_id: string;
}

export interface PortalSessionResponse {
  url: string;
}

export interface CreditsUsage {
  total_monthly_credits: number;
  used_monthly_credits: number;
}
