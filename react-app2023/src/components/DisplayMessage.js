import { useState } from "react";

function Game() {
  return (
    <div>
      <div className="card">
        <div>Guess My Number</div>
        <div>?</div>
      </div>
      <div className="instructions">
        <p>For this game, make a guess between 1-10</p>
      </div>
    </div>
  );
}

export default Game;
