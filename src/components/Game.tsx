import React, { useState } from 'react';
import { useCounterContract } from '../hooks/useCounterContract';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
  const navigate = useNavigate()
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 100));
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const { value: score, sendIncrement } = useCounterContract(); // Get score and send increment

  const handleSignSelection = (sign: string) => {
    setSelectedSign(sign);
  };

  const handleSubmit = () => {
    if (!selectedSign) return;

    let isCorrect = false;
    if (selectedSign === ">" && number1 > number2) {
      isCorrect = true;
    } else if (selectedSign === "<" && number1 < number2) {
      isCorrect = true;
    } else if (selectedSign === "=" && number1 === number2) {
      isCorrect = true;
    }

    if (isCorrect) {
      alert('Correct!');
      sendIncrement(); // Increment score on blockchain
    } else {
      alert('Wrong!');
    }

    // Generate new numbers for the next round
    setNumber1(Math.floor(Math.random() * 100));
    setNumber2(Math.floor(Math.random() * 100));
    setSelectedSign(null); // Reset selected sign
  };

  return (
    <div>
      <h1>Compare Numbers Game</h1>
      <button type='submit' onClick={() => {navigate('/wallet')}}>Wallet</button>
      <button type='submit' onClick={() => {navigate('/game')}}>Score board</button>
      <p>Score: {score}</p> {/* Show current score */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}>
  <p>{number1}</p>
  <p style={{ margin: '0 10px' }}>{selectedSign || "?"}</p> {/* Hiển thị dấu đã chọn hoặc dấu "?" nếu chưa chọn */}
  <p>{number2}</p>
</div>

      <div>
        <button onClick={() => handleSignSelection(">")}>lớn</button>
        <button onClick={() => handleSignSelection("<")}>bé</button>
        <button onClick={() => handleSignSelection("=")}>bằng</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
