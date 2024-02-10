import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import routeHandler from './routeHandler';
import { store } from '../store/store';
import { Provider } from 'react-redux'
import './assets/css/globalStyles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routeHandler} />
    </Provider>
  </React.StrictMode>
)
