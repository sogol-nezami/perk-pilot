import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Used by Vitest (Node), not by the browser
export const server = setupServer(...handlers);
