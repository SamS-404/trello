import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { CustomDragLayerContainer } from 'styles';
import { Column } from './Column';

function getItemStyles(
  currentOffset: XYCoord | null
): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer(
    (monitor) => ({
      isDragging: monitor.isDragging(),
      item: monitor.getItem(),
      currentOffset: monitor.getSourceClientOffset(),
    })
  );

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column
          id={item.id}
          text={item.text}
          index={item.index}
        />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};
