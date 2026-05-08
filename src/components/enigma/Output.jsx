import Rotors from "./Rotors";

export default function Output({ pressedLetter, onClear }) {
  return (
    <div className="output-con">
      <Rotors />
      <section className="output-section">
        <button className="clear-btn" onClick={onClear}>
          CLEAR
        </button>
        <div className="text-wrapper">
          <p>{pressedLetter.word}</p>
          <p>{pressedLetter.encrypted_word}</p>
        </div>
      </section>
    </div>
  );
}
