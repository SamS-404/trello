export type ColumnDragItem = {
  type: 'COLUMN';
  index: number;
  id: string;
  text: string;
};

export type CardDragItem = {
  type: 'CARD';
  index: number;
  id: string;
  text: string;
  columnId: string;
};

export type DragItem = ColumnDragItem | CardDragItem;
