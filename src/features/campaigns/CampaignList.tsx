import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchCampaigns } from './campaignsSlice';
import type { Campaign } from './types';
import styles from './CampaignList.module.css';

function formatDiscount(campaign: Campaign) {
  return campaign.discountType === 'percentage'
    ? `${campaign.discountValue}% off`
    : `€${campaign.discountValue} off`;
}

export function CampaignList() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.campaigns);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampaigns());
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <p role="status">Loading campaigns…</p>;
  }

  if (status === 'failed') {
    return (
      <div role="alert" className={styles.error}>
        <p>Campaigns couldn’t be loaded: {error}</p>
        <button type="button" onClick={() => dispatch(fetchCampaigns())}>
          Try again
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return <p>No campaigns yet. Create your first one to get started.</p>;
  }

  return (
    <ul className={styles.list}>
      {items.map((campaign) => (
        <li key={campaign.id} className={styles.item}>
          <div>
            <h2 className={styles.name}>{campaign.name}</h2>
            <p className={styles.meta}>
              <code>{campaign.couponCode}</code> · {formatDiscount(campaign)}
            </p>
          </div>
          <span className={styles.status} data-status={campaign.status}>
            {campaign.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
