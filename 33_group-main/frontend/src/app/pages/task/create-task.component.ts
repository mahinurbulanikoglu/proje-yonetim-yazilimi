import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Employee } from "app/models/employee";
import { Project } from "app/models/project";
import { Task } from "app/models/task";
import { TaskService } from "app/services/task.service";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
  })
  export class CreateTaskComponent {
    selectedDate: Date | null = null;
    name: string = '';
    dueDate: Date | null = null;
    taskId: number = 0;
    delayAmount: string = '';
    isEdit: boolean = false;
    title: string = 'Create Task';
    employees: Employee[] = [];
    selectedEmployee: Employee;
    projects: Project[] = [];
    selectedProject: Project
    status: string = '';
    statusOptions: string[] = ['Tamamlanacak', 'Tamamlandı', 'Devam Ediyor'];
  
    constructor(
      public dialogRef: MatDialogRef<CreateTaskComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private taskService: TaskService,
    ) {
      if (data.isEdit) {
        this.title = 'Edit Task'
        this.isEdit = data.isEdit;
        this.taskId = data.task.taskId;
        this.selectedDate = data.task.startDate;
        this.name = data.task.taskName;
        this.dueDate = data.task.dueDate;
        this.delayAmount = data.task.delayAmount;
        this.status = data.task.status;
        this.selectedProject = data.task.project;
        this.selectedEmployee = data.task.assignedTo
      }
      this.employees = data.employees;
      this.projects = data.projects;
      
    }
  
    updateSelectedDate(event: any): void {
      this.selectedDate = event.value;
    }
    updateDueDate(event: any): void {
        this.dueDate = event.value;
      }
  
    onCancelClick(): void {
      this.dialogRef.close();
    }

    compareProjects(project1: Project, project2: Project): boolean {
      return project1 && project2 ? project1.projectId === project2.projectId : project1 === project2;
    }

    compareEmployees(employee1: Employee, employee2: Employee): boolean {
      return employee1 && employee2 ? employee1.employeeId === employee2.employeeId : employee1 === employee2;
    }
  
  
    onCreateTaskClick(): void {
      let task:Task = {
        "taskId": this.taskId,
        "taskName": this.name,
        "startDate": this.selectedDate.toString(),
        "dueDate": this.dueDate.toString(),
        "delayAmount": this.delayAmount,
        "status": this.status,
        "assignedTo": this.selectedEmployee != null ? this.selectedEmployee: null,
        "project": this.selectedProject != null ? this.selectedProject : null
      }
  
      if(this.isEdit) {
        this.taskService.updateTask(task).subscribe(() => {
          
        });
      } else {
        this.taskService.addTask(task).subscribe((task) => {
        
        });
      }
      
      this.dialogRef.close();
    }
  }