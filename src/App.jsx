import React from 'react';
import { RouterProvider } from 'react-router-dom';
import BrowserRouter from './routes';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import store from './store';
import { SuspenseProvider } from './routes';
function App() {
  return (
    <>
      <AnimatePresence>
        <Provider store={store}>
          <SuspenseProvider>
            <RouterProvider router={BrowserRouter} />
          </SuspenseProvider>
        </Provider>
      </AnimatePresence>
    </>
  );
}

export default App;
