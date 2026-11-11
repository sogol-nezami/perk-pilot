import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { makeStore } from '../../app/store';
import { server } from '../../mocks/server';
import { CampaignList } from './CampaignList';

function renderWithStore() {
  return render(
    <Provider store={makeStore()}>
      <CampaignList />
    </Provider>,
  );
}

describe('CampaignList', () => {
  it('shows campaigns after loading', async () => {
    renderWithStore();

    expect(screen.getByRole('status')).toHaveTextContent('Loading campaigns');
    expect(await screen.findByText('Winter welcome')).toBeInTheDocument();
  });

  it('shows an error when the API fails', async () => {
    server.use(http.get('/api/campaigns', () => new HttpResponse(null, { status: 500 })));
    renderWithStore();

    expect(await screen.findByRole('alert')).toHaveTextContent('status 500');
  });
});
