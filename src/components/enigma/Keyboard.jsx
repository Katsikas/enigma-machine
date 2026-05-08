export default function Keyboard({
  keyboardLetters,
  isLambBoard,
  onSelect,
  pressedLetter,
}) {
  return (
    <section
      className={
        isLambBoard ? "keyboard lambBoard-section" : "keyboard keyboard-section"
      }
    >
      <ul className="keyboard-grid">
        {keyboardLetters.map((letter) => {
          let cssClass;
          let btnClass;

          if (letter === pressedLetter.encrypted_letter) {
            cssClass = "enable";
          } else {
            cssClass = "not-pressed";
          }

          if (letter === pressedLetter.letter) {
            btnClass = "pressed";
          } else {
            btnClass = "not-pressed";
          }

          return (
            <li
              className={`letter letter-${letter.toLowerCase()}`}
              key={letter}
            >
              {isLambBoard ? (
                <p className={cssClass}>{letter}</p>
              ) : (
                <button className={btnClass} onClick={() => onSelect(letter)}>
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
