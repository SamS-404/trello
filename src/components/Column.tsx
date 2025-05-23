import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { useAppState } from '../AppStateContext';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from '../styles';
import { DragItem } from 'types/DragItem';
import { isHidden } from 'utils/isHidden';
import { useItemDrag } from 'utils/useItemDrag';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

export const Column = ({
  text,
  index,
  id,
  isPreview,
}: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({
        type: 'MOVE_LIST',
        payload: { dragIndex, hoverIndex },
      });

      item.index = hoverIndex;
    },
  });

  const { drag } = useItemDrag({
    type: 'COLUMN',
    id,
    index,
    text,
  });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(
        isPreview,
        state.draggedItem,
        'COLUMN',
        id
      )}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card key={task.id} text={task.text} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({
            type: 'ADD_TASK',
            payload: { text, taskId: id },
          })
        }
        dark
      />
    </ColumnContainer>
  );
};
