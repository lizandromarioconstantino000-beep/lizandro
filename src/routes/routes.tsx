import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { AppLayout } from '../Layout/layout'
import Portfolio from '../pages/Portfolio'
import Project from '../pages/Project'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/projecto/:id',
        element: <Project />,
      },
    ],
  },
])
