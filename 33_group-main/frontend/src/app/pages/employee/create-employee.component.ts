import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Employee } from "app/models/employee";
import { Task } from "app/models/task";
import { EmployeeService } from "app/services/employee.service";

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
})
export class CreateEmployeeComponent {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    employeeId: number = 0;
    isEdit: boolean = false;
    title: string = 'Create Employee';


    constructor(
        public dialogRef: MatDialogRef<CreateEmployeeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private employeeService: EmployeeService,
    ) {
        if (data.isEdit) {
            this.title = 'Edit Employee'
            this.isEdit = data.isEdit;
            this.employeeId = data.employee.employeeId;
            this.firstName = data.employee.firstName;
            this.lastName = data.employee.lastName;
            this.email = data.employee.email;
        }
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }


    onCreateEmployeeClick(): void {
        let employee: Employee = {
            "employeeId": this.employeeId,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "email": this.email,
        }

        if (this.isEdit) {
            this.employeeService.updateEmployee(employee).subscribe(() => {

            });
        } else {
            this.employeeService.addEmployee(employee).subscribe((employee) => {

            });
        }

        this.dialogRef.close();
    }
}