import Keyboard from "./Keyboard";

export default function LambBoard({ keyboardLetters, pressedLetter }) {
  return (
    <Keyboard
      pressedLetter={pressedLetter}
      keyboardLetters={keyboardLetters}
      isLambBoard={true}
    />
  );
}
