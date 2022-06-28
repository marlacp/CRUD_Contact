import React from 'react';
import './updateButton.css';

function UpdateContactButton(props) {
  const onClickButton = () => {
    props.setOpenModalUpdate(prevState => !prevState);
    props.setId();
  };
  
  return (
    <span 
    className='UpdateContactButton' 
    onClick={onClickButton}> 
        Actualizar 
    </span>

  );
}

export { UpdateContactButton };