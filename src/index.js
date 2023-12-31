import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import General from './Components/General';
import Footer from './Components/Footer';
import Computer from './Computer';
import History from './Components/History';
import Sports from './Sports';

const router = createBrowserRouter([
  {
    path:"/",
    element: <General/>,
    // children: [
    //   {
    //     path:"/footer",
    //     element:<Footer/>
    //   }
    // ]
  },
  {
  path:"/footer",
  element:<Footer/>
  },
  {
    path:"/computer",
    element:<Computer/>
    },
    {
      path:"/history",
      element:<History/>
      },
    {
      path:"/sports",
      element:<Sports/>
      },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
