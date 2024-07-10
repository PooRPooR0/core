import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomApp from "./CustomApp";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomApp />
  </React.StrictMode>
);
