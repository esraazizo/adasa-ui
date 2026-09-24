import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import Blog from "./Components/Pages/Blog/Blog";
import About from "./Components/Pages/About/About";
import Notfound from "./Components/Pages/Notfound/Notfound";
import BlogDetail from "./Components/Pages/BlogDetail/BlogDetail";

function App() {
  const myroutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog/:slug", element: <BlogDetail /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myroutes}></RouterProvider>
    </>
  );
}

export default App;
