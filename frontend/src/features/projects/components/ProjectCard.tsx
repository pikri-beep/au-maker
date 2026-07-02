import type { Project } from "../types/Project";

type Props = {
    project: Project;
};

export default function ProjectCard({
    project,
}: Props) {
    return (
        <div
            style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                padding: 20,
            }}
        >
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <p>
                🕒 {project.updatedAt}
            </p>

            <div
                style={{
                    marginTop: 15,
                    display: "flex",
                    gap: 10,
                }}
            >
                <button>
                    Open
                </button>

                <button>
                    Delete
                </button>
            </div>
        </div>
    );
}