import Keyboard from "./Keyboard";

export default function LambBoard({ keyboardLetters, encryptedLetter }) {
  return (
    <Keyboard
      encryptedLetter={encryptedLetter}
      keyboardLetters={keyboardLetters}
      isLambBoard={true}
    />
  );
}
