import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Quemsomos from "./pages/Quemsomos";
import Historico from "./pages/Historico";
import Linha from "./pages/Linha";

export const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/about", element: <About/>},
  {path: "/quemsomos", element: <Quemsomos/>},
  {path: "/historico", element: <Historico/>},
  {path: "/linha-do-tempo", element: <Linha/>},
])