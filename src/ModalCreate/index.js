import React from 'react';
import ReactDOM from 'react-dom';
import './ModalCreate.css';

function ModalCreate({ children }) {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modalcreate')
  );
}

export { ModalCreate };