// ** React import
import React from 'react';
import ReactDOM from 'react-dom/client';

// ** React Router DOM import
import { BrowserRouter } from 'react-router-dom';

// ** Firebase import
import { initFireBase } from './firebase/config';

// ** Contexts import
import { IsLoadingContextProvider } from './contexts/IsLoadingContextProvider';

// ** Components import
import App from './App';

initFireBase();

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IsLoadingContextProvider>
        <App />
      </IsLoadingContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
