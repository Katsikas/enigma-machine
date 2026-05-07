import Rotors from "./Rotors";

export default function Output({ word, encryptedLetter, onClear }) {
  return (
    <div className="output-con">
      <Rotors />
      <section className="output-section">
        <div className="text-wrapper">
          <p>{word.word}</p>
          <p>{encryptedLetter}</p>
        </div>
        <button className="clear-btn" onClick={onClear}>
          CLEAR
        </button>
      </section>
    </div>
  );
}
