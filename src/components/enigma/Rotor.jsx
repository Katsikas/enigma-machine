import { useState } from "react";
import { LETTER_TO_POSITION } from "../../utils/dictionary";
import Modal from "../UI/Modal";

export default function Rotor({ rotorNumber, position, onSelect }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const prevLetterPosition = Object.keys(LETTER_TO_POSITION).find(
    (key) => LETTER_TO_POSITION[key] === (position === 1 ? 26 : position - 1),
  );
  const currentLetterPosition = Object.keys(LETTER_TO_POSITION).find(
    (key) => LETTER_TO_POSITION[key] === position,
  );
  const nextLetterPosition = Object.keys(LETTER_TO_POSITION).find(
    (key) => LETTER_TO_POSITION[key] === (position === 26 ? 1 : position + 1),
  );

  function handleLetterSelect(e) {
    const letter = e.target.innerHTML;

    onSelect(rotorNumber, LETTER_TO_POSITION[letter]);
  }

  function handleOpenInputModal() {
    setModalIsOpen(true);
  }

  function handleCloseInputModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleCloseInputModal}>
        <div className="modal-input-con">
          <h2>Set up the desired rotor position.</h2>
          <label>
            <h3 className="rotor-label">{rotorNumber}</h3>
            <input
              type="number"
              id={rotorNumber}
              name={rotorNumber}
              className="rotor"
              max={26}
              min={1}
              onChange={(e) => onSelect(rotorNumber, e.target.value)}
              value={position}
            />
          </label>
          <button className="close-btn" onClick={handleCloseInputModal}>
            READY
          </button>
        </div>
      </Modal>
      <section className="rotors-section">
        <div className="rotor-wrapper">
          <div
            className="position prev-position"
            data-position={position === 1 ? 26 : position - 1}
          >
            <button onClick={(e) => handleLetterSelect(e)}>
              {prevLetterPosition}
            </button>
          </div>
          <div className="position current-position" data-position={position}>
            <button onClick={handleOpenInputModal}>
              {currentLetterPosition}
            </button>
          </div>
          <div
            className="position next-position"
            data-position={position === 26 ? 1 : position + 1}
          >
            <button onClick={(e) => handleLetterSelect(e)}>
              {nextLetterPosition}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
