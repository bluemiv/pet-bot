import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimationPage, ContinuesVoicePage, HomePage } from './pages';
import reportWebVitals from './reportWebVitals';
import { ROUTE } from './constants';
import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTE.ANIMATION,
    element: <AnimationPage />,
  },
  {
    path: ROUTE.CONTINUES_VOICE,
    element: <ContinuesVoicePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
