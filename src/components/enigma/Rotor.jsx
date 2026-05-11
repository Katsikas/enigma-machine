export default function Rotor({ pressedLetter, position, onSelect }) {
  const readonly = pressedLetter.word.length > 0;

  return (
    <section className="rotors-section">
      <label>
        ROTOR-1:{" "}
        <input
          type="number"
          id="rotor-1"
          name="rotor-1"
          className="rotor"
          max={25}
          min={1}
          readOnly={readonly}
          title={
            readonly
              ? "Do not change rotor position setting while encrypting."
              : "Set up the desired rotor position setting 1-25."
          }
          onChange={(e) => onSelect(e.target.value)}
          value={position}
        />
      </label>
      <label>
        ROTOR-2:{" "}
        <input
          type="number"
          id="rotor-2"
          name="rotor-2"
          className="rotor"
          max={25}
          min={1}
          readOnly={readonly}
          title={
            readonly
              ? "Do not change rotor position setting while encrypting."
              : "Set up the desired rotor position setting 1-25."
          }
        />
      </label>
      <label>
        ROTOR-3:{" "}
        <input
          type="number"
          id="rotor-3"
          name="rotor-3"
          className="rotor"
          max={25}
          min={1}
          readOnly={readonly}
          title={
            readonly
              ? "Do not change rotor position setting while encrypting."
              : "Set up the desired rotor position setting 1-25."
          }
        />
      </label>
    </section>
  );
}
