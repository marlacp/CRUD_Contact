import React from 'react';
import ReactDOM from 'react-dom';
import './modalUpdate.css';

function ModalUpdate({ children }) {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modalupdate')
  );
}

export { ModalUpdate };