import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";
import Coverage from "./Components/Coverage/Coverage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Private_Routes/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import DashboardLayout from "./Dashboard/DashboardLayout";
import DashboardHome from "./Dashboard/DashboardHome";
import AddBook from "./Dashboard/AddBook";
import MyBooks from "./Dashboard/MyBooks";
import EditBook from "./Dashboard/EditBook";

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
         path: 'about',
         Component: About
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
  },

  //Dashboard links
  {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
         {
            index: true,
            Component: DashboardHome
         },
         {
            path: 'addbook',
            Component: AddBook
         },
         {
            path: 'mybooks',
            Component: MyBooks
         },
         {
            path: 'editbook/:id',
            loader: ({params}) => fetch(`http://localhost:9000/books/${params.id}`),
            Component: EditBook
         },
      ]
  }
]);
