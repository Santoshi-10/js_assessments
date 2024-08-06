import React, { useState } from 'react';

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {visible && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            borderRadius: '3px',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
