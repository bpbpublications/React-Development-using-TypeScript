// src/components/MatchDetail.tsx
import React from 'react';
import './MatchDetail.css'; // Import CSS file for styling

interface Match {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'live' | 'upcoming' | 'finished';
}

interface MatchDetailProps {
  match: Match;
}

const MatchDetail: React.FC<MatchDetailProps> = ({ match }) => {
  return (
    <div className="match-detail">
      <h3>Match Details</h3>
      <p>Home Team: {match.homeTeam}</p>
      <p>Away Team: {match.awayTeam}</p>
      <p>Score: {match.homeScore} - {match.awayScore}</p>
      <p>Status: {match.status}</p>
    </div>
  );
};

export default MatchDetail;
