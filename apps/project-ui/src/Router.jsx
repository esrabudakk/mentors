import {
    createBrowserRouter,
} from "react-router-dom";
import Users from "./pages/Users.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div > error </div>,
    },
    {
        path: "users",
        element: <Users />,
    },
]);

export default router