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
          <h4 className='buttontext--title'>
            Crea contactos
          </h4>
          <h1 className='buttontext--icon'>+</h1>
        </div>
      </button>
    </div>
  );
}

export { CreateContactButton };