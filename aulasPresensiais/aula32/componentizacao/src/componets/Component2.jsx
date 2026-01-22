import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
    </>
  );
}

export default Component2;