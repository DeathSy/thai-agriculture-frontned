import { lazy } from "react";

export default{
  Home:{
    path: "/home",
    exact: true,
    component: lazy(()=> import('../pages/Home'))
  },

  Welcome:{
    path: "/",
    exact: true,
    component: lazy(()=> import('../pages/welcome'))
  },

  Login:{
    path: "/Login",
    exact: true,
    component: lazy(()=> import('../pages/login'))
  },

  Register:{
    path: "/Register",
    exact: true,
    component: lazy(()=> import('../pages/register'))
  }
}