import Dashboard from "../pages/dashboard";
import UserManagement from "../pages/userManagement/index";

const root = "/dashboard";

const user = [
    {
        path: `${root}/`,
        component: <Dashboard/>,
        navbar: true,
        sidebar: true,
    },
    {
        path: `${root}/user`,
        component: <UserManagement/>,
        navbar: true,
        sidebar: true,
    },
];

export default user;
