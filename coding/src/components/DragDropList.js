import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <ul ref={provided.innerRef} {...provided.droppableProps}>
          {items.map((item, index) => (
            <Draggable key={item} draggableId={item} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {item}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default DragDropList;
