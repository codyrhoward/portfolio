import React from 'react'
import * as RiIcons from "react-icons/ri"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as GrIcons from "react-icons/gr"
import * as HiIcons from "react-icons/hi"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <IoIcons.IoIosPaper />,
        class: 'nav-text'
    },
    {
        title: 'My Projects',
        path: '/myprojects',
        icon: <HiIcons.HiOutlineDesktopComputer />,
        class: 'nav-text'
    },
]