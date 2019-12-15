import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Loot } from "utils/trafficParser";

const LootItem: React.FC<Loot & { index: number }> = ({ item, cost, receiver, index }) => (
  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
    {(provided, snapshot) => (
      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
        <div className="mb-2 p-1 border bg-white">
          <div className="text-purple-600">{item.name}</div>
          <div>
            <span className="w-4 pr-2">{cost}</span>
            <span className="font-bold">{receiver}</span>
          </div>
        </div>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
);

export default LootItem;
