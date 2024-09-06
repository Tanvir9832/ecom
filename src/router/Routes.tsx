import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AuthPage from "../pages/AuthPage";
import Footer from "../components/Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "/add-task",
            //     element: <Protected element={<AddTask />} />
            // },
            // {
            //     path: "/task/:id",
            //     element: <Protected element={<SingleTask />} />
            // }
        ],
    },
    {
      path: "/signup",
      element: <AuthPage />,
    },
    {
        path: "/signin",
        element: <AuthPage />,
    },
    // {
    //   path:"*",
    //   element: <NotFoundPage/>
    // },
]);

export default router;