import React from 'react';
import { Redirect } from 'react-router';

import Home from './../pages/home.jsx';
import Input from './../pages/input.jsx';
import Review from './../pages/review.jsx';
import WriteReview from '../pages/writereview.jsx';
import Formpage from './../pages/formpage.jsx';
import MyReview from '../pages/myreview.jsx';
import MyLike from '../pages/mylike.jsx';
import MyRecent from '../pages/myrecent.jsx';
import AdminPage from '../pages/adminpage.jsx';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/home' />,
  },
  {
    path: '/home',
    component: () => <Home />,
  },
  {
    path: '/input',
    component: () => <Input />,
  },
  {
    path: '/review',
    component: () => <Review />,
  },
  {
    path: '/writereview',
    component: () => <WriteReview />,
  },
  {
    path: '/formpage',
    component: () => <Formpage />,
  },
  {
    path: '/myreview',
    component: () => <MyReview />,
  },
  {
    path: '/mylike',
    component: () => <MyLike />,
  },
  {
    path: '/myrecent',
    component: () => <MyRecent />,
  },
  {
    path: '/adminpage',
    component: () => <AdminPage />,
  },

];

export default routes;
