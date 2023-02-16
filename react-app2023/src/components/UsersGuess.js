import React from "react";

export default function UsersGuess() {
  let [guess, setGuess] = useState("");

  let UsersGuess = () => {
    if (guess > correctNumber) {
      setGuess("Ooff, so close. Guess lower");
    } else if (guess < correctNumber) {
      setGuess("Ooff, so close. Guess higher");
    } else {
      setGuess("Winner, Winner, Chicken Dinner!");
    }
  };
  return <div>UsersGuess</div>;
}
