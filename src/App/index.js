import React from 'react';
import{AppUI}from './AppUI';
import { RegContactProvider } from '../RegContactContext';

function App() {
  return (
    <RegContactProvider>
      <AppUI />
    </RegContactProvider>
  );
}

export default App;