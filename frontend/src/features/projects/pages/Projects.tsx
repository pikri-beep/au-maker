import { useState } from "react";

import MainLayout from "../../../layouts/MainLayout";

import ProjectToolbar from "../components/ProjectToolbar";
import ProjectGrid from "../components/ProjectGrid";

import NewProjectModal from "../../../components/modals/NewProjectModal";

import { useProjects } from "../hooks";

export default function Projects() {

    const [openModal, setOpenModal] = useState(false);

    const projects = useProjects();

    return (

        <MainLayout>

            <div
                style={{
                    padding: 30,
                }}
            >

                <ProjectToolbar
                    onNewProject={() => setOpenModal(true)}
                />

                <ProjectGrid
                    projects={projects}
                />

            </div>

            <NewProjectModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />

        </MainLayout>

    );

}