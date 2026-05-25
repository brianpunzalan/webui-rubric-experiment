import { useState } from 'react';
import './App.css';

const PLAYER_COLORS = ['red', 'blue', 'green', 'yellow'];

function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [playerNames, setPlayerNames] = useState(['', '', '', '']);

  const handleNameChange = (index, value) => {
    const updated = [...playerNames];
    updated[index] = value;
    setPlayerNames(updated);
  };

  return (
    <>
      <header className="app-header">
        <h1 className="title">Can&#39;t Stop</h1>
        <p className="subtitle">Push-your-luck dice game for 2–4 players</p>
      </header>

      <main className="app-main">
        <div className="card">
          <div className="section-label">Number of players</div>
          <nav aria-label="Player count selection">
            <div className="player-count-buttons" role="group" aria-label="Number of players">
              {[2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`player-count-btn${playerCount === num ? ' active' : ''}`}
                  onClick={() => setPlayerCount(num)}
                  aria-pressed={playerCount === num}
                >
                  {num}
                </button>
              ))}
            </div>
          </nav>

          <div className="player-inputs">
            {Array.from({ length: playerCount }, (_, i) => (
              <div className="player-input-row" key={i}>
                <div
                  className={`player-dot ${PLAYER_COLORS[i]}`}
                  aria-hidden="true"
                />
                <input
                  type="text"
                  className="player-input"
                  placeholder={`Player ${i + 1} name`}
                  value={playerNames[i]}
                  onChange={(e) => handleNameChange(i, e.target.value)}
                  aria-label={`Player ${i + 1} name`}
                />
              </div>
            ))}
          </div>

          <button className="start-btn" type="button">
            Start Game
          </button>
        </div>
      </main>

      <footer className="app-footer" />
    </>
  );
}

export default App;
