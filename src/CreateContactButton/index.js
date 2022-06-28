import React from 'react';
import './CreateContactButton.css';

function CreateContactButton(props) {
  const onClickButton = () => {
    props.setOpenModalCreate(prevState => !prevState);
  };
  
  return (
    <div className='CreateContainer'>
      <button
        className="CreateContactButton"
        onClick={onClickButton}
      >
        <div className='buttontext'>
          <span className='buttontext--title'>
            Crea contactos
          </span>
          <span className='buttontext--icon'>+</span>
        </div>
      </button>
    </div>
  );
}

export { CreateContactButton };