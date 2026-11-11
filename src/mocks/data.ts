import type { Campaign } from '../features/campaigns/types';

export const campaigns: Campaign[] = [
  {
    id: 'c-1',
    name: 'Winter welcome',
    status: 'active',
    discountType: 'percentage',
    discountValue: 15,
    couponCode: 'WINTER15',
    startsAt: '2026-11-01',
    endsAt: '2026-12-31',
    redemptions: 1240,
  },
  {
    id: 'c-2',
    name: 'First order bonus',
    status: 'draft',
    discountType: 'fixed',
    discountValue: 10,
    couponCode: 'HELLO10',
    startsAt: '2026-12-01',
    endsAt: '2027-02-28',
    redemptions: 0,
  },
  {
    id: 'c-3',
    name: 'Summer sale',
    status: 'ended',
    discountType: 'percentage',
    discountValue: 25,
    couponCode: 'SUMMER25',
    startsAt: '2026-06-01',
    endsAt: '2026-08-31',
    redemptions: 5310,
  },
];
