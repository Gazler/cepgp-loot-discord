import React from "react";
import { DragDropContext, Draggable, Droppable, DroppableProvided } from "react-beautiful-dnd";

const DroppableCard: React.FC<{ droppableId: string }> = ({ droppableId, children }) => (
  <Droppable droppableId={droppableId}>
    {(provided, snapshot) => (
      <div
        className="flex-shrink-0 m-2 w-64 rounded overflow-hidden shadow-lg border-2 bg-white relative"
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        {children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default DroppableCard;
