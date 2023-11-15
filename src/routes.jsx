import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Repos = lazy(() => import('./pages/Repos'));
const Projects = lazy(() => import('./pages/Projects'));

export function SuspenseProvider({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

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
