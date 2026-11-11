import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { makeStore } from './app/store';
import './index.css';

async function enableMocking() {
  // The mock API runs in the browser via a Service Worker.
  // Remove this once a real backend exists.
  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledFrame: 'bypass' });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={makeStore()}>
        <App />
      </Provider>
    </StrictMode>,
  );
});
