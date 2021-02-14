import React from 'react';
import { Redirect } from 'react-router';

import Home from './../pages/home.jsx';
import Input from './../pages/input.jsx';
import Review from './../pages/review.jsx';
import WriteReview from '../pages/writereview.jsx';
import Formpage from './../pages/formpage.jsx';
<<<<<<< HEAD
import Admin_Insert from '../pages/admin_insert.jsx';
import Admin_Update from '../pages/admin_update.jsx';
=======
import MyReview from '../pages/myreview.jsx';
import MyLike from '../pages/mylike.jsx';
import MyRecent from '../pages/myrecent.jsx';
import AdminPage from '../pages/adminpage.jsx';
>>>>>>> 4e2422a012781ec6d230ee13f46095a4873d5290

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
<<<<<<< HEAD
    path: '/admin_insert',
    component: () => <Admin_Insert />,
  },
  {
    path: '/admin_update',
    component: () => <Admin_Update />,
  },
=======
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

>>>>>>> 4e2422a012781ec6d230ee13f46095a4873d5290
];

export default routes;
