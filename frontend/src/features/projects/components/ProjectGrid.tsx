import ProjectCard from "./ProjectCard";
import type { Project } from "../types/Project";

type Props = {
    projects: Project[];
};

export default function ProjectGrid({
    projects,
}: Props) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                gap: 20,
                marginTop: 20,
            }}
        >
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    );
}