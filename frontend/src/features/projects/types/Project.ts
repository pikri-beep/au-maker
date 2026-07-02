export interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateProjectPayload {
    title: string;
    description: string;
}

export interface UpdateProjectPayload {
    id: number;
    title: string;
    description: string;
}