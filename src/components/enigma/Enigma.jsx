import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import LambBoard from "./LambBoard";
import Output from "./Output";
import { ETW, ROTOR_1, ROTOR_2, ROTOR_3, UKW } from "../../utils/dictionary";

export default function Enigma() {
  const [rotorPosition, setRotorPosition] = useState({
    rotor1: 1,
    rotor2: 1,
    rotor3: 1,
  });
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
      let rotor1Move;
      let rotor2Move = prev.rotor2;
      let rotor3Move = prev.rotor3;

      if (prev.rotor1 === 26) {
        rotor1Move = 1;
        rotor2Move += 1;
      } else {
        rotor1Move = prev.rotor1 + 1;
      }

      if (rotor2Move === 26) {
        rotor2Move = 1;
        rotor3Move += 1;
      }

      return {
        rotor1: rotor1Move,
        rotor2: rotor2Move,
        rotor3: rotor3Move,
      };
    });
  }

  function handleRotorPositionChange(rotor, position) {
    if (!position || position < 0 || position > 26) {
      return;
    }

    setRotorPosition((prevPosition) => {
      const rotor1Move = rotor === "rotor-i" ? position : prevPosition.rotor1;
      const rotor2Move = rotor === "rotor-ii" ? position : prevPosition.rotor2;
      const rotor3Move = rotor === "rotor-iii" ? position : prevPosition.rotor3;

      return {
        rotor1: parseInt(rotor1Move),
        rotor2: parseInt(rotor2Move),
        rotor3: parseInt(rotor3Move),
      };
    });
  }

  function handleClearText() {
    setPressedLetter({
      letter: "",
      word: "",
      encrypted_letter: "",
      encrypted_word: "",
    });

    setRotorPosition({
      rotor1: 1,
      rotor2: 1,
      rotor3: 1,
    });
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
