import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import { Layout } from './components/Layout';
import { NewClient, action as NewClientAction } from './pages/NewClient';
import { Index, loader as clientsLoader } from './pages/Index';
import { ErrorPage } from './pages/ErrorPage';
import {
  EditClient,
  loader as editClientLoader,
  action as editClientAction,
} from './pages/EditClient';

import { action as deleteExistingClientAction } from './components/Clients';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: NewClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/:clientId/delete',
        action: deleteExistingClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
