import App from "@/App";
import Login from "@/pages/login/Login";
import Task from "@/pages/task/Task";
import Users from "@/pages/users/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Task />
            },
            {
                path: "/users",
                element: <Users />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
]);


export default routes;