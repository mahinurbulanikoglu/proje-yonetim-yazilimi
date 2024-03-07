import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'app/models/project';
import { Task } from 'app/models/task';
import { ProjectService } from 'app/services/porject.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {
  selectedDate: Date | null = null;
  endDate: Date | null = null;
  name: string ='';
  status: boolean = false;
  projectId: number = 0;
  isEdit: boolean = false;
  title: string = 'Create Project';

  constructor(
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
  ) {
    if (data.isEdit) {
      this.title = 'Edit Project'
      this.isEdit = data.isEdit;
      this.projectId = data.project.projectId;
      this.selectedDate = data.project.startDate;
      this.endDate = data.project.endDate;
      this.name = data.project.projectName;
      this.status = data.project.status;
    }

  }

  updateSelectedDate(event: any): void {
    this.selectedDate = event.value;
  }

  updateEndDate(event: any): void {
    this.endDate = event.value;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  onCreateProjectClick(): void {
    console.log(this.selectedDate + ": " + this.name + ": " + this.status)
    let project:Project = {
      "projectId": this.projectId,
      "projectName": this.name,
      "startDate": this.selectedDate.toString(),
      "endDate": this.endDate.toString(),
      "status": this.status,
    }

    if(this.isEdit) {
      this.projectService.updateProject(project).subscribe(() => {
        
      });
    } else {
      this.projectService.addProject(project).subscribe((project) => {
      
      });
    }
    
    this.dialogRef.close();
  }
}