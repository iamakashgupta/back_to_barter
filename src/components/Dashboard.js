// Add these imports
import EcoMeter from './EcoMeter';
import Leaderboard from './Leaderboard';

// Inside your Dashboard component
const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <div className="eco-section">
        <EcoMeter userId={user._id} />
        <Leaderboard />
      </div>
      {/* Rest of your dashboard content */}
    </div>
  );
};