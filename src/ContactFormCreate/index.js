import React from 'react';
import { RegContactContext } from '../RegContactContext';
import './ContactFormCreate.css';

function ContactFormCreate() {

  const [newNameValue, setnewNameValue] = React.useState('');
  const [newPhoneValue, setnewPhoneValue] = React.useState(null);
  const [newDateValue, setnewDateValue] = React.useState(null);
  const [newAdrValue, setnewAdrValue] = React.useState('');
  const [newEmailValue, setnewEmailValue] = React.useState('');

  // se destructura las funciones que necesitamos para añadir un contact y cerrar el modal
  const {
    addContact,
    setOpenModalCreate,
  } = React.useContext(RegContactContext);
  
  // Creamos una función para actualizar el estado de un nuevo contacto

  const onChangeName = (event) =>{
    setnewNameValue(event.target.value);
  };
  const onChangePhone = (event) =>{
    setnewPhoneValue(event.target.value);
  };
  const onChangeDate = (event) =>{
    setnewDateValue(event.target.value);
  };
  const onChangeAdr = (event) =>{
    setnewAdrValue(event.target.value);
  };
  const onChangeEmail = (event) =>{
    setnewEmailValue(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModalCreate(false);
  };
  
  // Función para agregar un nuevo Contact
  const onSubmit = (event) => {

    event.preventDefault();
    // Se utiliza función para añadir item de un contacto
    addContact(newNameValue, newPhoneValue, newDateValue, newAdrValue, newEmailValue);
    // cierre de modal
    setOpenModalCreate(false);
    // se resetea el formulario
    setnewNameValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nameContact"> Nombre: </label>
      <input 
        type="text" 
        name='nameContact'
        onChange={onChangeName}
      />
      <label htmlFor="phoneContact"> Teléfono: </label>
      <input 
        type="number" 
        name='phoneContact'
        onChange={onChangePhone}
      />
      <label htmlFor="dateContact"> Fecha de nacimiento: </label>
      <input 
        type="date" 
        name='dateContact'
        onChange={onChangeDate}
      />
      <label htmlFor="adrContact"> Dirección: </label>
      <input 
        type="text" 
        name='adrContact'
        onChange={onChangeAdr}
      />
      <label htmlFor="emailContact"> Correo electrónico: </label>
      <input 
        type="email" 
        name='emailContact'
        onChange={onChangeEmail}
      />
      <div className="ContactFormCreate-buttonContainer">
        <button
          type="button"
          className="ContactFormCreate-button ContactFormCreate-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="ContactFormCreate-button ContactFormCreate-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ContactFormCreate };