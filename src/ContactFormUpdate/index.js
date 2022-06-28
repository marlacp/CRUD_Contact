import React from 'react';
import { RegContactContext } from '../RegContactContext';
import './formUpdate.css';

function ContactFormUpdate() {
  const [idContact, setidContact] = React.useState(null);
  const [UpdateNameValue, setUpdateNameValue] = React.useState('');
  const [UpdatePhoneValue, setUpdatePhoneValue] = React.useState(null);
  const [UpdateDateValue, setUpdateDateValue] = React.useState(null);
  const [UpdateAdrValue, setUpdateAdrValue] = React.useState('');
  const [UpdateEmailValue, setUpdateEmailValue] = React.useState('');

  
  // se destructura las funciones que necesitamos para añadir un contact y cerrar el modal
  const {
    updateContact,
    setOpenModalUpdate,
    clicUpdateData,
  } = React.useContext(RegContactContext);
  
  // se setan los datos con el array previamente escogido por el usuario, boton Actualizar
  React.useEffect(() => {
    setUpdateNameValue(clicUpdateData.nameContact);
    setUpdatePhoneValue(clicUpdateData.phoneContact);
    setUpdateDateValue(clicUpdateData.dateContact);
    setUpdateAdrValue(clicUpdateData.adrContact);
    setUpdateEmailValue(clicUpdateData.emailContact);
    setidContact(clicUpdateData.id);
    console.log(clicUpdateData);
  },[clicUpdateData])
  // Creamos una función para actualizar el estado de un nuevo contacto


  const onChangeName = (event) =>{
    setUpdateNameValue(event.target.value);
  };
  const onChangePhone = (event) =>{
    setUpdatePhoneValue(event.target.value);
  };
  const onChangeDate = (event) =>{
    setUpdateDateValue(event.target.value);
  };
  const onChangeAdr = (event) =>{
    setUpdateAdrValue(event.target.value);
  };
  const onChangeEmail = (event) =>{
    setUpdateEmailValue(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModalUpdate(false);
  };
  
  // Función para Actualizar un nuevo Contact
  const onSubmit = (event) => {

    event.preventDefault();
    // Se utiliza función para añadir item de un contacto
    updateContact(idContact, UpdateNameValue, UpdatePhoneValue, UpdateDateValue, UpdateAdrValue, UpdateEmailValue);
    // cierre de modal
    setOpenModalUpdate(false);
    // se resetea el formulario
    setUpdateNameValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nameContact"> Nombre: </label>
      <input 
        type="text" 
        name='nameContact'
        onChange={onChangeName}
        value = {UpdateNameValue}
      />
      <label htmlFor="phoneContact"> Teléfono: </label>
      <input 
        type="number" 
        name='phoneContact'
        onChange={onChangePhone}
        value = {UpdatePhoneValue}
      />
      <label htmlFor="dateContact"> Fecha de nacimiento: </label>
      <input 
        type="date" 
        name='dateContact'
        onChange={onChangeDate}
        value = {UpdateDateValue}
      />
      <label htmlFor="adrContact"> Dirección: </label>
      <input 
        type="text" 
        name='adrContact'
        onChange={onChangeAdr}
        value = {UpdateAdrValue}
      />
      <label htmlFor="emailContact"> Correo electrónico: </label>
      <input 
        type="email" 
        name='emailContact'
        onChange={onChangeEmail}
        value = {UpdateEmailValue}
      />
      <div className="ContactFormUpdate-buttonContainer">
        <button
          type="button"
          className="ContactFormUpdate-button ContactFormUpdate-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="ContactFormUpdate-button ContactFormUpdate-button--add"
        >
          Actualizar
        </button>
      </div>
    </form>
  );
}

export { ContactFormUpdate };