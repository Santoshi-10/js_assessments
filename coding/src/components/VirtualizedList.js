import React from 'react';
import { FixedSizeList as List } from 'react-window';

function VirtualizedList() {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  return (
    <List
      height={500}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </List>
  );
}

export default VirtualizedList;
