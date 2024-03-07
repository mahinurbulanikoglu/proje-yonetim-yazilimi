import { Task } from "./task";

export interface Project {
    projectId?: number;
    projectName: string;
    startDate: string;
    endDate: string;
    status: boolean;
    tasks?: Task[]
  }