import React from 'react';
import { ContactSearch } from '../ContactSearch';
import { ContactList } from '../ContactList';
import { ContactItem } from '../ContactItem';
import { CreateContactButton } from '../CreateContactButton';
import { RegContactContext } from '../RegContactContext';
import { ModalCreate } from '../ModalCreate';
import { ContactFormCreate } from '../ContactFormCreate';
import { ModalUpdate } from '../ModalUpdate';
import { ContactFormUpdate } from '../ContactFormUpdate';
import './AppUi.css';

function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const {
    error,
    loading,
    searchedContact,
    deleteContact,
    openModalCreate,
    setOpenModalCreate,
    sentForUpdateContact,
    openModalUpdate,
  } = React.useContext(RegContactContext);

  return (
    <React.Fragment>
      <ContactSearch />
      <CreateContactButton
        setOpenModalCreate={setOpenModalCreate}
      />

      <ContactList>

        {error && <p className='error'>¡Upss! hubo un error...</p>}
        {loading && <p className='Loading'>Cargando...</p>}
        {(!loading && !searchedContact.length) && <p className='noContacts'>¡Ups aún tienes contactos!</p>}
        
        {searchedContact.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name = {contact.nameContact}
            phone = {contact.phoneContact}
            date = {contact.dateContact}
            adr = {contact.adrContact}
            email = {contact.emailContact}
            onDelete={() => deleteContact(contact.id)}
            onClicUpdate = {() => sentForUpdateContact(contact.id)}
          />
        ))}
      </ContactList>
        {!!openModalUpdate && (
          <ModalUpdate>
            <ContactFormUpdate 
            />
          </ModalUpdate>
        )}

      {!!openModalCreate && (
        <ModalCreate>
          <ContactFormCreate />
        </ModalCreate>
      )}

    </React.Fragment>
  );
}

export { AppUI };
