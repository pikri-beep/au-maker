import { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function NewProjectModal({
    open,
    onClose,
}: Props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    if (!open) return null;

    const handleCreate = () => {
        if (!title.trim()) return;

        console.log({
            title,
            description,
        });

        setTitle("");
        setDescription("");

        onClose();
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.45)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
            }}
        >
            <div
                style={{
                    width: 520,
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: 30,
                }}
            >
                <h2>New Project</h2>

                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    <label>Project Name</label>

                    <Input
                        placeholder="Romance SMA"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />
                </div>

                <div
                    style={{
                        marginTop: 20,
                    }}
                >
                    <label>Description</label>

                    <Textarea
                        rows={5}
                        placeholder="Write project description..."
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 10,
                        marginTop: 30,
                    }}
                >
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={handleCreate}
                    >
                        Create Project
                    </Button>
                </div>
            </div>
        </div>
    );
}