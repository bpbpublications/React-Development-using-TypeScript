import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchLiveScoresAsync } from "../../store/actions/sportsActions";
import "./Scoreboard.css";

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

export interface Sport {
  name: string;
  matches: Match[];
} // src/components/Scoreboard/Scoreboard.tsx

const Scoreboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { liveScores, loading, error } = useSelector(
    (state: RootState) => state.sports
  );

  useEffect(() => {
    dispatch(fetchLiveScoresAsync());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="scoreboard">
      <h2>Live Scores</h2>
      {liveScores.map((sport: Sport) => (
        <div key={sport.name} className="sport-category">
          <h3 className="sport-name">{sport.name}</h3>
          <ul className="matches-list">
            {sport.matches.map((match: Match) => (
              <li key={match.id} className="match-item">
                <span className="team-name">{match.homeTeam}</span>
                <span className="score">
                  {match.homeScore} - {match.awayScore}
                </span>
                <span className="team-name">{match.awayTeam}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
