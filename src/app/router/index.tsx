import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Curriculum from "../../pages/Curriculum";
import Admissions from "../../pages/Admissions";
import Clubs from "../../pages/Clubs";
import Contact from "../../pages/Contact";
import Application from "../../pages/Application";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "curriculum", element: <Curriculum /> },
      { path: "admissions", element: <Admissions /> },
      { path: "clubs", element: <Clubs /> },
      { path: "contact", element: <Contact /> },
      { path: "apply", element: <Application /> },
    ],
  },
]);