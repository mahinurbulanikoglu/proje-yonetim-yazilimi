import { Employee } from "./employee";
import { Project } from "./project";

export interface Task {
 taskId?: number;
 taskName: string;
 startDate: string;
 dueDate: string;
 delayAmount: string;
 assignedTo?: Employee; 
 project?: Project;
 status: string;
}