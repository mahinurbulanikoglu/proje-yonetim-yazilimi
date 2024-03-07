import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Employee } from "app/models/employee";
import { EmployeeService } from "app/services/employee.service";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Router } from "@angular/router";
import { TaskService } from "app/services/task.service";
import { Task } from "app/models/task";
import { EmployeeDetailComponent } from "./employee-detail.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  newEmployee: Employee = { firstName: '', lastName: '', email: ''};
  selectedEmployee: Employee | undefined;

  constructor(private employeeService: EmployeeService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("auth")) {
      this.loadEmployees();
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe((employee) => {
      this.employees.push(employee);
      this.newEmployee = { firstName: '', lastName: '', email: ''};
    });
  }

  updateEmployee(): void {
    if (this.selectedEmployee) {
      this.employeeService.updateEmployee(this.selectedEmployee).subscribe(() => {
        // Güncellenen projeyi projeler listesinde güncelle
        const index = this.employees.findIndex(p => p.employeeId === this.selectedEmployee?.employeeId);
        if (index !== -1) {
          this.employees[index] = this.selectedEmployee;
        }
        this.selectedEmployee = undefined;
      });
    }
  }

  createEmployee() {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      data: { isEdit: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadEmployees();
    });
  }

  editEmployee(selectedEmployee: Employee): void {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      data: { employee: selectedEmployee, isEdit: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadEmployees();
    });
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {

    });
  }

  showDetail(tasks: Task[]) {
    const dialogRef = this.dialog.open(EmployeeDetailComponent, {
      data: { tasks: tasks }
    });
  }
}