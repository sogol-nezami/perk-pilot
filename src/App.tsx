import { CampaignList } from './features/campaigns/CampaignList';

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>Perk Pilot</h1>
        <p>Create and manage discount campaigns in one place.</p>
      </header>
      <CampaignList />
    </main>
  );
}
