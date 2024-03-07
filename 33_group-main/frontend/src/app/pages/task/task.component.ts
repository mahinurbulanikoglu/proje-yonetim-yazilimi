import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Task } from "app/models/task";
import { TaskService } from "app/services/task.service";
import { CreateTaskComponent } from "./create-task.component";
import { Router } from "@angular/router";
import { Employee } from "app/models/employee";
import { EmployeeService } from "app/services/employee.service";
import { ProjectService } from "app/services/porject.service";
import { Project } from "app/models/project";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  newTask: Task = { taskName: '', startDate: '', dueDate: '', delayAmount: '', status: ''};
  selectedTask: Task | undefined;
  employees: Employee[] = [];
  projects: Project[] = [];

  constructor(private taskService: TaskService, private projectService: ProjectService, private dialog: MatDialog, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    if(localStorage.getItem("auth")) {
      this.loadTasks();
      this.loadEmployees();
      this.loadProjects();
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    } )
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  addTask(): void {
    this.taskService.addTask(this.newTask).subscribe((task) => {
      this.tasks.push(task);
      this.newTask = { taskName: '', startDate: '', dueDate: '', delayAmount: '', status: ''};
    });
  }

  updateTask(): void {
    if (this.selectedTask) {
      this.taskService.updateTask(this.selectedTask).subscribe(() => {
        // Güncellenen projeyi projeler listesinde güncelle
        const index = this.tasks.findIndex(p => p.taskId === this.selectedTask?.taskId);
        if (index !== -1) {
          this.tasks[index] = this.selectedTask;
        }
        this.selectedTask = undefined;
      });
    }
  }

  createTask() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      data: { isEdit: false, employees: this.employees, projects: this.projects }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadTasks();
    });
  }

  editTask(selectedTask: Task): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      data: { task: selectedTask, isEdit: true, employees: this.employees, projects: this.projects }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadTasks();
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {

    });
  }
}