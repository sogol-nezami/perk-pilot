export type CampaignStatus = 'draft' | 'active' | 'paused' | 'ended';

export type DiscountType = 'percentage' | 'fixed';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  discountType: DiscountType;
  discountValue: number;
  couponCode: string;
  startsAt: string; // ISO date
  endsAt: string; // ISO date
  redemptions: number;
}
