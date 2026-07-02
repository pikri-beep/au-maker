import { dummyProjects } from "../data/dummyProjects";
import { Project } from "../types/Project";

export const useProjects = (): Project[] => {
    return dummyProjects;
};