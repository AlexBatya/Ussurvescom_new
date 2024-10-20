// src/components/PopUp.tsx
import React from 'react';
//import '../styles/popup.styles.scss';

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopUpProps> = ({ isVisible, onClose, children }) => {
  return (
    <div className={`popup ${isVisible ? 'popup--visible' : ''}`}>
      <div className="popup__content">
        <button className="popup__close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
