import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function ProviderComponent({ children }) {
  const [value, setValue] = useState('Hello World');

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
      <p>{value}</p>
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </div>
  );
}

function App() {
  return (
    <ProviderComponent>
      <ConsumerComponent />
    </ProviderComponent>
  );
}

export default App;
