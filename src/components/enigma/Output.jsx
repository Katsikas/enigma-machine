import Rotor from "./Rotor";

export default function Output({
  pressedLetter,
  onClear,
  rotorPosition,
  onRotorSelect,
}) {
  return (
    <div className="output-con">
      <img
        src="/enigma-logo.svg"
        height={480}
        width={60}
        className="outputBg"
        alt="engima logo"
      />
      <Rotor position={rotorPosition} onSelect={onRotorSelect} />
      <Rotor position={rotorPosition} onSelect={onRotorSelect} />
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
