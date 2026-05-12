import { useState } from "react";

export default function Keyboard({
  keyboardLetters,
  isLambBoard,
  onSelect,
  pressedLetter,
}) {
  const [pressed, setPressed] = useState(false);

  function handleAnimationEnd() {
    setPressed((prev) => !prev);
  }

  return (
    <section
      className={
        isLambBoard ? "keyboard lambBoard-section" : "keyboard keyboard-section"
      }
    >
      <ul className="keyboard-grid">
        {keyboardLetters.map((letter) => {
          let lambCssClass;

          if (isLambBoard && letter === pressedLetter.encrypted_letter) {
            lambCssClass = "enable";
          } else {
            lambCssClass = "";
          }

          const isPressed = pressed && letter === pressedLetter.letter;

          return (
            <li
              className={`${isLambBoard ? "light" : "key"}`}
              id={`letter-${letter.toLowerCase()}`}
              key={letter}
            >
              {isLambBoard ? (
                <p className={lambCssClass}>{letter}</p>
              ) : (
                <button
                  onAnimationEnd={handleAnimationEnd}
                  className={isPressed ? "pressed" : ""}
                  onClick={() => {
                    onSelect(letter);
                    handleAnimationEnd();
                  }}
                >
                  {letter}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
