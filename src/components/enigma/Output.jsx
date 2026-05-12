import Rotor from "./Rotor";

export default function Output({
  pressedLetter,
  onClear,
  rotorPosition,
  onRotorSelect,
}) {
  return (
    <div className="output-con">
      <Rotor position={rotorPosition} onSelect={onRotorSelect} />
      <section className="output-section">
        <button className="clear-btn" onClick={onClear}>
          CLEAR
        </button>
        <div className="text-wrapper">
          <p>MESSAGE:</p>
          <p className="output-text">{pressedLetter.word}</p>
        </div>
        <div className="text-wrapper">
          <p>CIPHER:</p>
          <p className="output-text">{pressedLetter.encrypted_word}</p>
        </div>
      </section>
    </div>
  );
}
