import React, { ReactNode } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  /* Styles for the modal overlay (background) */
  /* Example styles: */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  /* Styles for the modal content (the form) */
  /* Example styles: */
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative; /* Add relative positioning for the close button */
  max-height: 500px;
  overflow: auto;
`;

const CloseButton = styled.button`
  /* Styles for the close button */
  /* Example styles: */
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
