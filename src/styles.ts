import styled from 'styled-components';

interface AddItemButtonProps {
  dark?: boolean;
}

interface DragPreviewContainerProps {
  isHidden?: boolean;
  previewType?: 'COLUMN' | 'CARD';
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
`;

export const CustomDragLayerContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #3179ba;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  flex-grow: 0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  padding: 8px 8px;
  border-radius: 3px;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  max-width: 300px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 3px;
  text-align: left;
  background-color: #ffffff3d;
  color: ${(props) => (props.dark ? '#000' : '#fff')};
  font-weight: bold;
  cursor: pointer;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  color: #fff;
  text-align: center;
`;

export const NewItemInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
