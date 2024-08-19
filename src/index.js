import React from 'react';
import ReactDOM from 'react-dom/client';
import Tarefa1 from './Tarefa1';
import Tarefa2 from './Tarefa2';
import Tarefa3 from './Tarefa3';
import Tarefa4 from './Tarefa4';
import Tarefa5 from './Tarefa5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Tarefa1 />
      <Tarefa2 />
      <Tarefa3 />
      <Tarefa4 />
      <Tarefa5 />
  </React.StrictMode>
);

reportWebVitals();
