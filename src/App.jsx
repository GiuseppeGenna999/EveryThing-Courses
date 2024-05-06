import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import Courses from './components/Courses/Courses.jsx';
import CourseDetail from './components/Courses/CourseDetail.jsx';
import {Reservation} from './components/Courses/Reservation.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { AuthContextProvider } from './contexts/AuthContext/AuthContextProvider.jsx';
import { Layout } from './components/Layouts/Layout.jsx';

const router = createBrowserRouter([
    {
    element: (
        <AuthContextProvider>
            <Layout />
        </AuthContextProvider>
    ),
     children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/courses',
            element: <Courses />,
        },
        {
            path: '/courses/:id',
            element: <CourseDetail />,
        },
        {
            path: '/reservation',
            element: <Reservation />,
        },
        {
            path: '/*',
            element: <NotFound />,
        },
     ]
    }
  
]);

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
