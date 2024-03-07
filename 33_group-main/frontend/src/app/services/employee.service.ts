import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'app/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(updatedEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl, updatedEmployee);
  }

  deleteEmployee(employeeId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${employeeId}`;
    return this.http.delete<void>(deleteUrl);
  }
}