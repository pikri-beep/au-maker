import {
    LayoutDashboard,
    FolderOpen,
    Users,
    MessageSquare,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
    {
        icon: LayoutDashboard,
        title: "Dashboard",
        path: "/",
    },
    {
        icon: FolderOpen,
        title: "Projects",
        path: "/projects",
    },
    {
        icon: Users,
        title: "Characters",
        path: "/characters",
    },
    {
        icon: MessageSquare,
        title: "Templates",
        path: "/templates",
    },
    {
        icon: Settings,
        title: "Settings",
        path: "/settings",
    },
];

export default function Sidebar() {
    return (
        <aside
            style={{
                width: 260,
                background: "#fff",
                borderRight: "1px solid #E5E7EB",
                padding: 20,
            }}
        >
            

            {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                    <NavLink
                        key={menu.title}
                        to={menu.path}
                        style={({ isActive }) => ({
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "12px",
                            borderRadius: 10,
                            marginBottom: 8,
                            textDecoration: "none",
                            color: isActive ? "#023E8A" : "#334155",
                            background: isActive
                                ? "#CAF0F8"
                                : "transparent",
                            fontWeight: isActive ? 700 : 500,
                            transition: ".2s",
                            cursor: "pointer",
                        })}
                    >
                        <Icon size={18} />
                        {menu.title}
                    </NavLink>
                );
            })}
        </aside>
    );
}