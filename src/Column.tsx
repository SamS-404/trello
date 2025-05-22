import React from 'react';
import { useAppState } from './AppStateContext';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({
  text,
  index,
  id,
}: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
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
