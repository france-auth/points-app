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
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
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


export const dashCards = [
    {
        id: 1,
        title: "Total Users",
        figure: "5,203",
        increase: "+20.1% from last month",
        icon: usersIcon
    },
    {
        id: 2,
        title: "Daily Active Users",
        figure: "2,370",
        increase: "+12.54% from yesterday",
        icon: usersIcon
    },
    {
        id: 3,
        title: "Active Now",
        figure: "+529",
        increase: "+7.15% since the last 1h",
        icon: usersIcon
    },
    {
        id: 4,
        title: "New Users",
        figure: "+460",
        increase: "+19.31% since the last 12h",
        icon: usersIcon
    }
]



export const users = [
    {
        id: 0,
        pfp: user1,
        username: "Username",
        date: "Date",
        time: "Time"        
    },
    {
        id: 1,
        pfp: user1,
        username: "@billy",
        date: "2024-09-01",
        time: "16:00"
        
    },
    {
        id: 2,
        pfp: user2,
        username: "@john_doe",
        date: "2024-09-01",
        time: "16:00"
        
    },
    {
        id: 3,
        pfp: user3,
        username: "@alice",
        date: "2024-09-01",
        time: "16:00"
        
    },
    {
        id: 4,
        pfp: user4,
        username: "@_johnson",
        date: "2024-09-01",
        time: "16:00",
        timmy: "16:00"
        
    },
    {
        id: 5,
        pfp: user5,
        username: "@emma",
        date: "2024-09-01",
        time: "16:00",
        timmy: "16:00"
        
    },
    {
        id: 6,
        pfp: user6,
        username: "@michael_",
        date: "2024-09-01",
        time: "16:00",
        timmy: "16:00"
        
    },
    {
        id: 7,
        pfp: user7,
        username: "@sophia",
        date: "2024-09-01",
        time: "16:00",
        timmy: "16:00"
        
    },
    {
        id: 8,
        pfp: user8,
        username: "@_oliva",
        date: "2024-09-01",
        time: "16:00",
        timmy: "16:00"
        
    },
    {
        id: 9,
        pfp: user9,
        username: "@liam",
        date: "2024-09-01",
        time: "16:00",
        timmy: "16:00"
        
    },
    {
        id: 10,
        pfp: user10,
        username: "@noah_x",
        date: "2024-09-01",
        time: "16:00"
        
    },
]


export const settings = [
    {
        name: "Category",
        value: "Value",
        color: "#f4e34e"
    },
    {
        name: "Account",
        value: "true",
        color: "#004850"
    },
    {
        name: "Notifications",
        value: "false",
        color: "#004850"
    },
    {
        name: "Language",
        value: "English",
        color: "#004850"
    },
    {
        name: "Theme",
        value: "Light",
        color: "#004850"
    }
]