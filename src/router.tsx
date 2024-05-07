import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Quemsomos from "./pages/Quemsomos";

export const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/about", element: <About/>},
  {path: "/quemsomos", element: <Quemsomos/>},
  {path: "/about", element: <About/>},
  {path: "/about", element: <About/>},
])