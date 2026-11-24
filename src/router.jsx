import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Secret_Routes/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import DashboardLayout from "./Dashboard/DashboardLayout";
import DashboardHome from "./Dashboard/DashboardHome";
import AddBook from "./Dashboard/AddBook";
import MyBooks from "./Dashboard/MyBooks";
import EditBook from "./Dashboard/EditBook";
import BookDetail from "./BookDetail/BookDetail";
import EditProfile from "./EditProfile/EditProfile";
import UsersManagement from "./Dashboard/UsersManagement";
import AllBooks from "./Dashboard/AllBooks";
import AdminRoute from "./Secret_Routes/AdminRoute";
import LibrarianRoute from "./Secret_Routes/LibrarianRoute";
import MyOrders from "./Dashboard/MyOrders";

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
         path: 'bookDetail/:id',
         loader: ({params}) => fetch(`http://localhost:9000/books/${params.id}`),
         element: <PrivateRoute><BookDetail></BookDetail></PrivateRoute>
      },
      { 
         path: 'editProfile/:id',
         loader: ({params}) => fetch(`http://localhost:9000/users/${params.id}`),
         element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
      },
      { 
         path: 'profile/:email',
         loader: ({params}) => fetch(`http://localhost:9000/users/email/${params.email}`),
         element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
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
         //User Routes
         {
            path: 'myOrders',
            Component: MyOrders
         },

         //Librarian Routes
         {
            path: 'addbook',
            element: <LibrarianRoute><AddBook></AddBook></LibrarianRoute>
         },
         {
            path: 'mybooks',
            element: <LibrarianRoute><MyBooks></MyBooks></LibrarianRoute>
         },
         {
            path: 'editbook/:id',
            loader: ({params}) => fetch(`http://localhost:9000/books/${params.id}`),
            element: <LibrarianRoute><EditBook></EditBook></LibrarianRoute> 
         },

         //Admin Routes
         {
            path: 'allbooks',
            element: <AdminRoute><AllBooks></AllBooks></AdminRoute>
         },
         {
            path: 'usersManagement',
            element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
         },

      ]
  }
]);
