import React from 'react';
import { RouterProvider } from 'react-router-dom';
import BrowserRouter from './routes';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <AnimatePresence>
        <RouterProvider router={BrowserRouter} />
      </AnimatePresence>
    </>
  );
}

export default App;
