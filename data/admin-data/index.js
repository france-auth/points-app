import {
    dashboardIcon,
    dashboardIcon2,
    usersIcon,
    usersIcon2,
    logoutIcon,
    logoutIcon2,
    settingsIcon,
    settingsIcon2,
    tasksIcon,
    tasksIcon2,
} from "@/public/assets/admin-images/index"



export const navItems = [
    {
        id: 1,
        icon: dashboardIcon,
        icon2: dashboardIcon2,
        title: 'Dashboard',
        path: '/alterim/admin/dashboard'
    },
    {
        id: 2,
        icon: usersIcon,
        icon2: usersIcon2,
        title: 'Users',
        path: '/alterim/admin/users'
    },
    {
        id: 3,
        icon: tasksIcon,
        icon2: tasksIcon2,
        title: 'Tasks',
        path: '/alterim/admin/tasks'
    },
    {
        id: 4,
        icon: settingsIcon,
        icon2: settingsIcon2,
        title: 'Settings',
        path: "/alterim/admin/settings"
    },
    {
        id: 5,
        icon: logoutIcon,
        icon2: logoutIcon2,
        title: 'Logout',
        path: "/alterim/sign-in"
    },
];