import { v4 as uuid } from 'uuid';

const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  return (
    <div>
      <li
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={provided.draggableProps.style}
        className={snapshot.isDragging ? 'dragging' : ''}
      >
        {item.label}
      </li>
    </div>
  );
};

const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  console.log('Destination JSON', destination);
  return destination;
};

export { copy, getRenderItem, reorder };