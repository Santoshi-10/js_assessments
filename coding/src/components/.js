import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function ProviderComponent({ children }) {
  const [value, setValue] = useState('Context Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

function ConsumerComponent() {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue('Updated Context Value')}>Update Value</button>
    </div>
  );
}

function CodingQ10() {
  return (
    <ProviderComponent>
      <div>
        <h2>Context Example</h2>
        <ConsumerComponent />
      </div>
    </ProviderComponent>
  );
}

export default CodingQ10;
