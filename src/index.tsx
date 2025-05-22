import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppStateProvider } from './AppStateContext';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
) as ReactDOM.Root;

root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
