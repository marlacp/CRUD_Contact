import React from 'react';
import './ContactItem.css';
import { RegContactContext } from '../RegContactContext';
import { UpdateContactButton } from '../UpdateContactButton'


function ContactItem(props) {

  const {
    
    setOpenModalUpdate,
    
  } = React.useContext(RegContactContext);

  return (
    <li className="ContactItem">
      
      <p className='title'>
        Nombre: 
        <span className='results'>
          {props.name}
        </span>
      </p>
      <p className='title'>
        Teléfono: 
        <span className='results'>
          {props.phone}
        </span>
      </p>
      <p 
        className='title'

        >
        Fecha de nacimiento: 
        <span className='results'>
          {props.date}
        </span>
      </p>
      <p className='title'>
        Dirección: 
        <span className='results'>
          {props.adr}
        </span>
      </p>
      <p className='title'>
        Correo electrónico: 
        <span className='results'>
          {props.email}
        </span>
      </p>
      <div className='container_actions'>
        <UpdateContactButton
          setOpenModalUpdate={setOpenModalUpdate}
          setId = {props.onClicUpdate}
        />
        <span
          className="Icon Icon-delete"
          onClick={props.onDelete}
                  >
          Eliminar
        </span>

      </div>
    </li>
  );
}

export { ContactItem };