import React from "react";

export default function WinningNumber(props) {
  //set is the prefix for that function that
  //allows you to replace
  //the state value
  //let [winningNumber, setWinningNumber] = useState("");

  let randomizeNumber = () => {
    let randomizeNum = Math.floor(Math.random() * 10 + 1);
    //for prop names that require a callback
    //those props begin with the word "on"
    //which holds the callback that's coming in from
    //the parent component which IS handleWinningNumber
    props.onWinningNumber(randomizeNum);
    //setWinningNumber(randomizeNum);
  };
  return <div>{randomizeNumber}</div>;
}
