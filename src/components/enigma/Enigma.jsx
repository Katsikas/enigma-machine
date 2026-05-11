import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import LambBoard from "./LambBoard";
import Output from "./Output";
import { ENCRYPTEDLETTERS } from "../../utils/dictionary";

export default function Enigma() {
  const [rotorPosition, setRotorPosition] = useState(1);
  const [pressedLetter, setPressedLetter] = useState({
    letter: "",
    word: "",
    encrypted_letter: "",
    encrypted_word: "",
  });

  const keyboardLetters = Object.keys(ENCRYPTEDLETTERS[0]).toSpliced(0, 1);

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key.toUpperCase();

      const compareToKeyboard = keyboardLetters.filter((l) => l === key);

      if (compareToKeyboard.length === 0) return;

      handleLetterSelect(key);
    }

    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [keyboardLetters]);

  function handleLetterSelect(selectedLetter) {
    const encryptedLetter = ENCRYPTEDLETTERS[rotorPosition - 1][selectedLetter];

    setPressedLetter((prev) => {
      return {
        letter: selectedLetter,
        word: prev.word + selectedLetter,
        encrypted_letter: encryptedLetter,
        encrypted_word: prev.encrypted_word + encryptedLetter,
      };
    });

    setRotorPosition((prev) => {
      let newPosition;

      if (prev === 25) {
        newPosition = 1;
      } else {
        newPosition = prev + 1;
      }
      return newPosition;
    });
  }

  function handleRotorPositionChange(position) {
    setRotorPosition(parseInt(position));

    setPressedLetter({
      letter: "",
      word: "",
      encrypted_letter: "",
      encrypted_word: "",
    });
  }
  function handleClearText() {
    setPressedLetter({
      letter: "",
      word: "",
      encrypted_letter: "",
      encrypted_word: "",
    });

    setRotorPosition(1);
  }

  if (pressedLetter.word.length >= 120) {
    handleClearText();
  }

  return (
    <section className="enigma-machine">
      <Output
        pressedLetter={pressedLetter}
        onClear={handleClearText}
        rotorPosition={rotorPosition}
        onRotorSelect={handleRotorPositionChange}
      />
      <LambBoard
        keyboardLetters={keyboardLetters}
        pressedLetter={pressedLetter}
      />
      <Keyboard
        keyboardLetters={keyboardLetters}
        onSelect={handleLetterSelect}
        pressedLetter={pressedLetter}
      />
    </section>
  );
}
