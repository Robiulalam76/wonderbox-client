import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Main from '../layout/Main';
import ProductDetails from '../pages/Product/ProductDetails';
import MyOrders from '../pages/Profile/user/MyOrders';
import AddCard from '../pages/Profile/seller/AddCard';
import MyProducts from '../pages/Profile/seller/MyProducts';
import Login from '../pages/Login_Register/Login';
import Register from '../pages/Login_Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/products', element: <Product></Product> },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/api/product/${params?.id}`),
                element: <ProductDetails></ProductDetails>
            },
            { path: '/my-orders', element: <MyOrders></MyOrders> },

            // store
            { path: '/store/add-card', element: <AddCard></AddCard> },
            { path: '/store/products', element: <MyProducts></MyProducts> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
        ]
    },
])

export default router;