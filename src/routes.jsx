import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default BrowserRouter;
