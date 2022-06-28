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
        <h4 className='results'>
          {props.name}
        </h4>
      </p>
      <p className='title'>
        Teléfono: 
        <h4 className='results'>
          {props.phone}
        </h4>
      </p>
      <p className='title'>
        Fecha de nacimiento: 
        <h4 className='results'>
          {props.date}
        </h4>
      </p>
      <p className='title'>
        Dirección: 
        <h4 className='results'>
          {props.adr}
        </h4>
      </p>
      <p className='title'>
        Correo electrónico: 
        <h4 className='results'>
          {props.email}
        </h4>
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