type Props = {
    onNewProject: () => void;
};

export default function ProjectToolbar({
    onNewProject,
}: Props) {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >

            <h1>Projects</h1>

            <button
                onClick={onNewProject}
            >
                + New Project
            </button>

        </div>

    );

}