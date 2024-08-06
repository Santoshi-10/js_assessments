import React, { memo } from 'react';

const MemoizedComponent = memo(({ value }) => {
  console.log('Rendered:', value);
  return <div>{value}</div>;
});

function App() {
  const [value, setValue] = React.useState('Hello');

  return (
    <div>
      <MemoizedComponent value={value} />
      <button onClick={() => setValue('Hello')}>Update</button>
    </div>
  );
}

export default App;
