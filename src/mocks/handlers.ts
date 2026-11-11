import { http, HttpResponse, delay } from 'msw';
import { campaigns } from './data';

// Fake REST API. Swap these handlers for a real backend later.
export const handlers = [
  http.get('/api/campaigns', async () => {
    await delay(400); // simulate network latency so loading states are visible
    return HttpResponse.json(campaigns);
  }),
];
