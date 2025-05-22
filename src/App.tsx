import React from 'react';
import { Column } from './Column';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { AppContainer } from './styles';

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Task 1" />
        <Card text="Task 2" />
        <Card text="Task 3" />
      </Column>
      <Column text="In Progress">
        <Card text="Task 4" />
        <Card text="Task 5" />
        <Card text="Task 6" />
      </Column>
      <Column text="Done">
        <Card text="Task 7" />
        <Card text="Task 8" />
        <Card text="Task 9" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
};

export default App;
