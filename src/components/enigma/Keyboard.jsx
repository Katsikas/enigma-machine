export default function Keyboard({
  keyboardLetters,
  isLambBoard,
  onSelect,
  encryptedLetter,
}) {
  return (
    <section
      className={
        isLambBoard ? "keyboard lambBoard-section" : "keyboard keyboard-section"
      }
    >
      <ul className="keyboard-grid">
        {keyboardLetters.map((letter) => {
          let cssClass = "disable";

          if (letter === encryptedLetter) {
            cssClass = "enable";
          }

          return (
            <li
              className={`letter letter-${letter.toLowerCase()}`}
              key={letter}
            >
              {isLambBoard ? (
                <p className={cssClass}>{letter}</p>
              ) : (
                <button onClick={() => onSelect(letter)}>{letter}</button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
