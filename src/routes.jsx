import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Repos from './pages/Repos';
import Projects from './pages/Projects';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/repos',
    element: <Repos />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

export default BrowserRouter;
