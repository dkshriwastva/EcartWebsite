import React from 'react'
import  ReactDom from 'react-dom/client'
import App from './App.jsx'

import './index.css';
import Profile from './Components/Profile.jsx';
import Home from './Components/Home.jsx';
import Cart from './Components/Cart.jsx';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ThemeContext from './Components/ThemeContext.jsx';
import ProductPage from './Components/ProductPage.jsx';
import AppStore from './Store/Store.js';
import {Provider} from 'react-redux';

 
const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [{
        path:"/",
        element: <Home></Home>
      },
       {
        path:"/Profile",
        element: <Profile></Profile>
       },
       {
        path: "/Cart",
        element: <Cart></Cart>
       },
      
       {
         path: "/Product/:id",
         element: <ProductPage></ProductPage>
       }]  
    }
  ]);
ReactDom.createRoot(document.getElementById('root')).render(
  <Provider Store={AppStore}>
 <ThemeContext>
   <RouterProvider router={AppRouter}> </RouterProvider>
  </ThemeContext>
  </Provider>
  );
