import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal " : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
