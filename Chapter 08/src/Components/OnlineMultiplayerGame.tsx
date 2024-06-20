import React, { useState, useCallback } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PlayerLine = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #219652;
    }
  }
`;

const OnlineMultiplayerGame: React.FC = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 }
  ]);

  const incrementScore = useCallback((playerId: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId ? { ...player, score: player.score + 1 } : player
      )
    );
  }, []);

  return (
    <GameContainer>
      <h1>Online Multiplayer Game - useCallback</h1>
      {players.map((player) => (
        <PlayerLine key={player.id}>
          <span>
            {player.name} - Score: {player.score}
          </span>
          <button onClick={() => incrementScore(player.id)}>+1</button>
        </PlayerLine>
      ))}
    </GameContainer>
  );
};

export default OnlineMultiplayerGame;
