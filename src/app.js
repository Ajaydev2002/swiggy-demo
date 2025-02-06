import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestrauntsMenu from "./components/RestrauntsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"


const Grocery = lazy(() => ("./components/Grocery"));

const Applayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Ajay",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className="app">
                    <UserContext.Provider value={{ loggedInUser: "Sandeep R" }}>
                        <Header />
                    </UserContext.Provider>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/Grocery",
                element:
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/Restraunts/:resId",
                element: <RestrauntsMenu />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
