import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";
import Coverage from "./Components/Coverage/Coverage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Private_Routes/PrivateRoute";
import Profile from "./Components/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { 
         path: 'books',
         element: <PrivateRoute><Books></Books></PrivateRoute>
      },
      { 
         path: 'register',
         Component: Register
      },
      { 
         path: 'login',
         Component: Login
      },
      { 
         path: 'profile',
         Component: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
         path: 'coverage',
         Component: Coverage,
         loader: () => fetch('/ServiceCenters.json')
      }
    ],
  }
]);
