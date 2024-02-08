import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/globalStyles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routeHandler from './routeHandler';
import './assets/css/globalStyles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routeHandler} />
  </React.StrictMode>
)
