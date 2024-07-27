import Home from "../main/Home";
import Catalog from "../main/Catalog";
import News from "../main/News";
import AboutUs from "../main/AboutUs";
import NotFound from "../notfound/NotFound";
import Login from "../profile/Login";
import Register from "../profile/Register";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/catalog",
    element: Catalog,
  },
  {
    path: "/news",
    element: News,
  },
  {
    path: "/aboutus",
    element: AboutUs,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "*",
    element: NotFound,
  },
];
