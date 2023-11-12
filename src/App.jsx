import React from 'react';
import { RouterProvider } from 'react-router-dom';
import BrowserRouter from './routes';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <AnimatePresence>
        <Provider store={store}>
          <RouterProvider router={BrowserRouter} />
        </Provider>
      </AnimatePresence>
    </>
  );
}

export default App;
