import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import { router } from './router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Firebase_Auth/AuthProvider.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <QueryClientProvider client={queryClient}>
             <AuthProvider>
                  <RouterProvider router={router}></RouterProvider>
            </AuthProvider>    
        </QueryClientProvider>
  </StrictMode>,
)




