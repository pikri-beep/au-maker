import MainLayout from "../../../layouts/MainLayout";

import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";
import RecentProjects from "../components/RecentProjects";

export default function Dashboard() {
    return (
        <MainLayout>
            <div
                style={{
                    padding: 30,
                }}
            >
                <DashboardHeader />

                <div
                    style={{
                        display: "flex",
                        gap: 20,
                    }}
                >
                    <StatCard title="Projects" value={12} />
                    <StatCard title="Characters" value={58} />
                    <StatCard title="Templates" value={7} />
                </div>

                <RecentProjects />
            </div>
        </MainLayout>
    );
}