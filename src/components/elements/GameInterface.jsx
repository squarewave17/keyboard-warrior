import { useRef, useState, useEffect, useContext } from "react";
import keypress from "../../assets/sounds/keypress.mp3";
import keypressReverse from "../../assets/sounds/keypressReverse.mp3";
import wordCorrect from "../../assets/sounds/wordCorrect.mp3";
import wordError from "../../assets/sounds/error.mp3";
import GlobalContext from "../../context/GlobalContext";

function GameInterface({ target }) {
  const { sound, gameMode } = useContext(GlobalContext);
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

  const playSound = (x) => {
    if (sound)
      switch (x) {
        case "press":
          keySound.play();
          break;
        case "delete":
          keySoundRev.play();
          break;
        case "correct":
          if (!gameMode) audioCorrect.play();
          break;
        case "error":
          audioError.play();
          break;
      }
  };
  // END Sound effects

  // Focus Cursor
  const inputFocusRef = useRef();

  useEffect(() => {
    inputFocusRef.current.focus();
  }, [inputFocusRef]);
  // END Focus Sursor

  //Input State
  const [inputValue, setInputValue] = useState("");

  //Handle Input
  const handleInput = (e) => {
    const liveValue = e.target.value;
    const liveValueArr = liveValue.split("");

    // check if liveValueArr array matches targetValueArr array
    if (liveValueArr.every((value, index) => value === targetValueArr[index])) {
      if (liveValue > inputValue) {
        playSound("press");
      } else {
        playSound("delete");
      }
      setInputValue(liveValue);
    } else {
      playSound("error");
    }
  };

  useEffect(() => {
    if (currentTarget === inputValue) {
      playSound("correct");
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
