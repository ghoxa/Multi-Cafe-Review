import React from 'react';
import {Redirect} from 'react-router';

import Home from './../pages/home.jsx';
import Input from './../pages/input.jsx';
import Review from './../pages/review.jsx';
import MyPage from './../pages/mypage.jsx';

const routes = [
    {
        path:'/',
        exact: true,
        component: () => <Redirect to="/home"/>
    },
    {
        path:'/home',
        component: () => <Home/>
    },
    {
        path:'/input',
        component: () => <Input/>
    },
    {
        path:'/review',
        component: () => <Review/>
    },
    {
        path:'/mypage',
        component: () => <MyPage/>
    }
];

export default routes;