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
          <p>MESSAGE</p>
          <p className="output-text">{pressedLetter.word}</p>
        </div>
        <div className="text-wrapper">
          <p>CHIPHER</p>
          <p className="output-text">{pressedLetter.encrypted_word}</p>
        </div>
      </section>
    </div>
  );
}
