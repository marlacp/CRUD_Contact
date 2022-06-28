import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const RegContactContext = React.createContext();

function RegContactProvider(props) {

   const {
     item: contacts,
     saveItem: saveContacts,
     loading,
     error,
  } = useLocalStorage('REGCONTACT_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModalCreate, setOpenModalCreate] = React.useState(false);
  const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
  const [clicUpdateData, setclicUpdateData] = React.useState({});
  // const completedRegContact = contacts.filter(contact => !!contact.completed).length;
  // const totalContact = contacts.length;

  let searchedContact = [];
//* Buscador Contact
  if (!searchValue.length >= 1) {
    searchedContact = contacts;
  } else {
    searchedContact = contacts.filter(contact => {
      const contactName = contact.nameContact.toLowerCase();
      const contactPhome = contact.phoneContact;
      const contactAdr = contact.adrContact.toLowerCase();
      const contactEmail = contact.emailContact.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return contactName.includes(searchText) || contactPhome.includes(searchText) || contactAdr.includes(searchText) || contactEmail.includes(searchText);
    });
  }

  //TODO Función para añadir un nuevo Contacto
  const addContact = (nameContact, phoneContact, dateContact, adrContact, emailContact) => {
    const newContacts = [...contacts];
    const id = newId();
    newContacts.push({
      nameContact,
      phoneContact,
      dateContact,
      adrContact,
      emailContact,
      id,

    });
    saveContacts(newContacts);
  };

  const newId = () => {
    let id = Math.floor(Math.random() * 100000);
    const existingContact = getContactById(id);
    if(existingContact){
      return newId();
    }
    return id;
  };

   
  const getContactById = (id) =>{
    return contacts.find(c=>c.id===id);
  }


  //! Funcion para eliminar contactos
  const deleteContact = (id) => {
    console.log(id)
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    const newContacts = [...contacts];
    newContacts.splice(contactIndex, 1);
    saveContacts(newContacts);
  };

  //* Funcion para actualizar la informacion de un contacto
  const updateContact = (id, nameContact, phoneContact, dateContact, adrContact, emailContact) => {
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    const newContacts = [...contacts];
    newContacts[contactIndex].nameContact = nameContact;
    newContacts[contactIndex].phoneContact = phoneContact;
    newContacts[contactIndex].dateContact = dateContact;
    newContacts[contactIndex].adrContact = adrContact;
    newContacts[contactIndex].emailContact = emailContact;
    saveContacts(newContacts);
  };

   
 // funcion para identificar el id de actualizar y crear diccionario de ese dato
  const sentForUpdateContact = (id) => {
    const contactData = contacts.find(contact => contact.id === id);
    setclicUpdateData(contactData)

  }
  
  return (
    <RegContactContext.Provider value={{
      loading,
      error,
      // totalContact,
      // completedRegContact,
      searchValue,
      setSearchValue,
      searchedContact,
      // completeRegContact,
      clicUpdateData,
      sentForUpdateContact,
      deleteContact,
      addContact,
      openModalCreate,
      setOpenModalCreate,
      updateContact,
      openModalUpdate,
      setOpenModalUpdate,
      
    }}>
      {props.children}
    </RegContactContext.Provider>
  );
}

export { RegContactContext, RegContactProvider };
