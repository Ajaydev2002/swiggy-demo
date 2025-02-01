
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestrauntsMenu from "./components/RestrauntsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const Applayout = () => {
    return (
        <div className="app"> 
        <Header/>
        <Outlet/> 
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/About",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/Restraunts/:resId",
                element: <RestrauntsMenu/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
