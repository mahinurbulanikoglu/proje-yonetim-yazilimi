import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project';
import { ProjectService } from 'app/services/porject.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from './create-project.component';
import { Router } from '@angular/router';
import { Task } from 'app/models/task';
import { TaskService } from 'app/services/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  newProject: Project = { projectName: '', startDate: '', endDate: '', status: false };
  selectedProject: Project | undefined;


  constructor(private projectService: ProjectService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem("auth")) {
      this.loadProjects();
    } else {
      this.router.navigate(['/login']);
    }

  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  addProject(): void {
    this.projectService.addProject(this.newProject).subscribe((project) => {
      this.projects.push(project);
      this.newProject = { projectName: '', startDate: '', endDate: '', status: false };
    });
  }

  updateProject(): void {
    if (this.selectedProject) {
      this.projectService.updateProject(this.selectedProject).subscribe(() => {
        // Güncellenen projeyi projeler listesinde güncelle
        const index = this.projects.findIndex(p => p.projectId === this.selectedProject?.projectId);
        if (index !== -1) {
          this.projects[index] = this.selectedProject;
        }
        this.selectedProject = undefined;
      });
    }
  }

  createProject() {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: { isEdit: false }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadProjects();
    });
  }

  editProject(selectedProject: Project): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: { project: selectedProject, isEdit: true} 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProjects();
    });
  }

  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId).subscribe(() => {

    });
  }

}
