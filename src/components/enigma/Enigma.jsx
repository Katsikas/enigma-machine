import { useState } from "react";
import Keyboard from "./Keyboard";
import LambBoard from "./LambBoard";
import Output from "./Output";

const ENCRYPTEDLETTERS = [
  { normal: "Q", encrypted: "R" },
  { normal: "W", encrypted: "X" },
  { normal: "E", encrypted: "F" },
  { normal: "R", encrypted: "S" },
  { normal: "T", encrypted: "U" },
  { normal: "Z", encrypted: "A" },
  { normal: "U", encrypted: "V" },
  { normal: "I", encrypted: "J" },
  { normal: "O", encrypted: "P" },
  { normal: "A", encrypted: "B" },
  { normal: "S", encrypted: "T" },
  { normal: "D", encrypted: "E" },
  { normal: "F", encrypted: "G" },
  { normal: "G", encrypted: "H" },
  { normal: "H", encrypted: "I" },
  { normal: "J", encrypted: "K" },
  { normal: "K", encrypted: "L" },
  { normal: "P", encrypted: "Q" },
  { normal: "Y", encrypted: "Z" },
  { normal: "X", encrypted: "Y" },
  { normal: "C", encrypted: "D" },
  { normal: "V", encrypted: "W" },
  { normal: "B", encrypted: "C" },
  { normal: "N", encrypted: "O" },
  { normal: "M", encrypted: "N" },
  { normal: "L", encrypted: "M" },
];

export default function Enigma() {
  const [pressedLetter, setPressedLetter] = useState({
    letter: "",
    word: "",
    en: "",
  });

  const encryptedLetter = ENCRYPTEDLETTERS.filter(
    (l) => l.normal === pressedLetter.letter,
  )
    .map((l) => l.encrypted)
    .join();

  function handleLetterSelect(selectedLetter) {
    setPressedLetter((prev) => {
      return {
        letter: selectedLetter,
        word: prev.word + selectedLetter,
        en: prev.en + encryptedLetter,
      };
    });
  }

  function handleClearText() {
    setPressedLetter({
      letter: "",
      word: "",
      en: "",
    });
  }

  const keyboardLetters = ENCRYPTEDLETTERS.map((l) => l.normal);
  return (
    <section className="enigma-machine">
      <Output
        word={pressedLetter}
        encryptedLetter={encryptedLetter}
        onClear={handleClearText}
      />
      <LambBoard
        keyboardLetters={keyboardLetters}
        encryptedLetter={encryptedLetter}
      />
      <Keyboard
        keyboardLetters={keyboardLetters}
        onSelect={handleLetterSelect}
      />
    </section>
  );
}
