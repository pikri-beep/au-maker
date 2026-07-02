import { projectApi } from "../api/projectApi";
import { Project } from "../types/Project";

class ProjectService {
    async getAll(): Promise<Project[]> {
        const response = await projectApi.get<Project[]>("/projects");
        return response.data;
    }

    async create(data: Partial<Project>): Promise<Project> {
        const response = await projectApi.post<Project>("/projects", data);
        return response.data;
    }

    async update(id: number, data: Partial<Project>): Promise<Project> {
        const response = await projectApi.put<Project>(
            `/projects/${id}`,
            data
        );

        return response.data;
    }

    async delete(id: number): Promise<void> {
        await projectApi.delete(`/projects/${id}`);
    }
}

export default new ProjectService();