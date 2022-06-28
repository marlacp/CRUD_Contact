import React from 'react';
import './ContactSearch.css';
import { RegContactContext } from '../RegContactContext';


function ContactSearch() {
  const { searchValue, setSearchValue } = React.useContext(RegContactContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="ContactSearch"
      placeholder="Busca por nombre, teléfono, dirección o correo electrónico"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
  ];
}

export { ContactSearch };