import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Employee } from "app/models/employee";
import { Task } from "app/models/task";

@Component({
    selector: 'app-create-employee',
    templateUrl: './employee-detail.component.html',
})
export class EmployeeDetailComponent {
    tasks: Task[] = []
    doneCount: number = 0;
    willBeDoneCount: number = 0;
    continueCount: number = 0;


    constructor(
        public dialogRef: MatDialogRef<EmployeeDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {  
        this.tasks = data.tasks

        this.doneCount = this.countTasksByStatus('Tamamlandı');
        this.willBeDoneCount = this.countTasksByStatus('Tamamlanacak');
        this.continueCount = this.countTasksByStatus('Devam Ediyor');
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    countTasksByStatus(status: string): number {
        return this.tasks.filter(task => task.status === status).length;
    }
}