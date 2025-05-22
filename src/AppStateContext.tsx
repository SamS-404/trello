import React, {
  createContext,
  useReducer,
  useContext,
} from 'react';
import { v4 as uuid } from 'uuid';
import { findItemIndexById } from './utils/findItemIndexById';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: {
        taskId: string;
        text: string;
      };
    };

const appStateReducer = (
  state: AppState,
  action: Action
): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: uuid(),
            text: action.payload,
            tasks: [],
          },
        ],
      };
    }

    case 'ADD_TASK': {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      );

      state.lists[targetLaneIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      });

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

const appData = {
  lists: [
    {
      id: '0',
      text: 'To do',
      tasks: [
        {
          id: '1',
          text: 'Make coffee',
        },
        {
          id: '2',
          text: 'Make tea',
        },
      ],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [
        {
          id: '3',
          text: 'Make coffee 2',
        },
        {
          id: '4',
          text: 'Make tea 2',
        },
      ],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [
        {
          id: '5',
          text: 'Make coffee 3',
        },
        {
          id: '6',
          text: 'Make tea 3',
        },
      ],
    },
  ],
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(
    appStateReducer,
    appData
  );

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
