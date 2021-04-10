import React from "react";
import { Redirect } from "react-router";

import Home from "./../pages/home.jsx";
import Input from "./../pages/input.jsx";
import Review from "./../pages/review.jsx";
import WriteReview from "../pages/writereview.jsx";
import Formpage from "./../pages/formpage.jsx";
import Admin_Insert from "../pages/admin_insert.jsx";
import Admin_Update from "../pages/admin_update.jsx";
import MyReview from "../pages/myreview.jsx";
import MyLike from "../pages/mylike.jsx";
import MyRecent from "../pages/myrecent.jsx";
import AdminPage from "../pages/adminpage.jsx";
import SignIn from "../pages/signin.jsx";
import SignOut from "../pages/signout.jsx";
import Register from "../pages/register.jsx";
import ModifyReview from "../pages/modifyreview.jsx";
import Admin_Cafe from "../pages/admin_cafe.jsx";
import Map from "../pages/map.jsx";
import MyTaste from "../pages/mytaste.jsx";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: () => <Home />,
  },
  {
    path: "/input",
    component: () => <Input />,
  },
  {
    path: "/review",
    component: () => <Review />,
  },
  {
    path: "/writereview",
    component: () => <WriteReview />,
  },
  {
    path: "/modifyreview",
    component: () => <ModifyReview />,
  },

  {
    path: "/formpage",
    component: () => <Formpage />,
  },
  {
    path: "/admin_insert",
    component: () => <Admin_Insert />,
  },
  {
    path: "/admin_cafe",
    component: () => <Admin_Cafe />,
  },
  {
    path: "/admin_update",
    component: () => <Admin_Update />,
  },
  {
    path: "/myreview",
    component: () => <MyReview />,
  },
  {
    path: "/mylike",
    component: () => <MyLike />,
  },
  {
    path: "/myrecent",
    component: () => <MyRecent />,
  },
  {
    path: "/adminpage",
    component: () => <AdminPage />,
  },
  {
    path: "/signin",
    component: () => <SignIn />,
  },
  {
    path: "/signout",
    component: () => <SignOut />,
  },
  {
    path: "/register",
    component: () => <Register />,
  },
  {
    path: "/map",
    component: () => <Map />,
  },
  {
    path: "/mytaste",
    component: () => <MyTaste />,
  },
];

export default routes;
