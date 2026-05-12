import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import LambBoard from "./LambBoard";
import Output from "./Output";
import { ETW, ROTOR_1, ROTOR_2, ROTOR_3, UKW } from "../../utils/dictionary";

export default function Enigma() {
  const [rotorPosition, setRotorPosition] = useState(1);
  const [pressedLetter, setPressedLetter] = useState({
    letter: "",
    word: "",
    encrypted_letter: "",
    encrypted_word: "",
  });

  const keyboardLetters = Object.keys(ROTOR_1[0]);

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
    const etw = ETW[0][selectedLetter];

    const rotor_1 = ROTOR_1[0][etw];
    const rotor_2 = ROTOR_2[0][rotor_1];
    const rotor_3 = ROTOR_3[0][rotor_2];

    const ukw_encrypted = UKW[0][rotor_3];

    setPressedLetter((prev) => {
      return {
        letter: selectedLetter,
        word: prev.word + selectedLetter,
        encrypted_letter: ukw_encrypted,
        encrypted_word: prev.encrypted_word + ukw_encrypted,
      };
    });

    setRotorPosition((prev) => {
      let newPosition;

      if (prev === 26) {
        newPosition = 1;
      } else {
        newPosition = prev + 1;
      }
      return newPosition;
    });
  }

  function handleRotorPositionChange(position) {
    setRotorPosition(parseInt(position));
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
