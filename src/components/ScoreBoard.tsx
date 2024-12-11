import React from 'react';
import { useCounterContract } from '../hooks/useCounterContract';

export const ScoreBoard = () => {
  const { value: score } = useCounterContract();

  return (
    <div>
      <h2>Scoreboard</h2>
      <p>Current Score: {score}</p>
    </div>
  );
};
