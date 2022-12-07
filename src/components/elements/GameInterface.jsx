import { useRef, useState, useEffect } from "react";
import keypress from "../../assets/sounds/keypress.mp3";
import keypressReverse from "../../assets/sounds/keypressReverse.mp3";
import wordCorrect from "../../assets/sounds/wordCorrect.mp3";
import wordError from "../../assets/sounds/error.mp3";

function GameInterface({ target }) {
  //Get word
  const getRandomWord = () => {
    return target[Math.floor(Math.random() * target.length)];
  };

  //currentTarget
  const [currentTarget, setCurrentTarget] = useState(getRandomWord);
  const targetValueArr = currentTarget.split("");
  // Sound Effects
  const keySound = new Audio(keypress);
  const keySoundRev = new Audio(keypressReverse);
  const audioCorrect = new Audio(wordCorrect);
  const audioError = new Audio(wordError);
  audioCorrect.volume = 0.3;
  audioError.volume = 0.5;

  // Focus Cursor
  const inputFocusRef = useRef();

  useEffect(() => {
    inputFocusRef.current.focus();
  }, [inputFocusRef]);

  //Input State
  const [inputValue, setInputValue] = useState("");

  //Handle Input
  const handleInput = (e) => {
    const liveValue = e.target.value;
    const liveValueArr = liveValue.split("");

    // check if liveValueArr array matches targetValueArr array
    if (liveValueArr.every((value, index) => value === targetValueArr[index])) {
      if (liveValue > inputValue) {
        keySound.play();
      } else {
        keySoundRev.play();
      }
      setInputValue(liveValue);
    } else {
      audioError.play();
    }
  };

  useEffect(() => {
    if (currentTarget === inputValue) {
      audioCorrect.play();
      setCurrentTarget(getRandomWord);
      setInputValue("");
    }
  }, [handleInput]);

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl pb-8">{currentTarget}</h1>
        <input
          type="text"
          className="text-input text-4xl bg-transparent text-center"
          ref={inputFocusRef}
          value={inputValue}
          onChange={handleInput}
        />
      </div>
    </>
  );
}
export default GameInterface;
