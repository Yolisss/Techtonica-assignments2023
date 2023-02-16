import React from "react";

export default function WinningNumber() {
  let [winningNumber, setWinningNumber] = useState("");

  let randomizeNumber = (winningNumber) => {
    Math.floor(Math.random() * 10 + 1);
    setWinningNumber(newRandomNumber);
  };
  return <div>WinningNumber</div>;
}
