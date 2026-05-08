import { useState } from "react";
import Keyboard from "./Keyboard";
import LambBoard from "./LambBoard";
import Output from "./Output";

const ENCRYPTEDLETTERS = [
  {
    Q: "R",
    W: "X",
    E: "F",
    R: "S",
    T: "U",
    Z: "A",
    U: "V",
    I: "J",
    O: "P",
    A: "B",
    S: "T",
    D: "E",
    F: "G",
    G: "H",
    H: "I",
    J: "K",
    K: "L",
    P: "Q",
    Y: "Z",
    X: "Y",
    C: "D",
    V: "W",
    B: "C",
    N: "O",
    M: "N",
    L: "M",
  },
];

export default function Enigma() {
  const [pressedLetter, setPressedLetter] = useState({
    letter: "",
    word: "",
    encrypted_letter: "",
    encrypted_word: "",
  });

  function handleLetterSelect(selectedLetter) {
    const encryptedLetter = ENCRYPTEDLETTERS[0][selectedLetter];

    setPressedLetter((prev) => {
      return {
        letter: selectedLetter,
        word: prev.word + selectedLetter,
        encrypted_letter: encryptedLetter,
        encrypted_word: prev.encrypted_word + encryptedLetter,
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
  }

  const keyboardLetters = Object.keys(ENCRYPTEDLETTERS[0]);

  return (
    <section className="enigma-machine">
      <Output pressedLetter={pressedLetter} onClear={handleClearText} />
      <LambBoard
        keyboardLetters={keyboardLetters}
        encryptedLetter={pressedLetter.encrypted_letter}
      />
      <Keyboard
        keyboardLetters={keyboardLetters}
        onSelect={handleLetterSelect}
      />
    </section>
  );
}
