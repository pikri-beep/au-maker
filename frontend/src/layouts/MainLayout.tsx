import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import PropertiesPanel from "../components/layout/PropertiesPanel";

import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />

            <div
                style={{
                    flex: 1,
                    display: "flex",
                }}
            >
                <Sidebar />

                <main
                    style={{
                        flex: 1,
                    }}
                >
                    {children}
                </main>

                <PropertiesPanel />
            </div>
        </div>
    );
}