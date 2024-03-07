import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'app/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(updatedtask: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl, updatedtask);
  }

  deleteTask(taskId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${taskId}`;
    return this.http.delete<void>(deleteUrl);
  }
}