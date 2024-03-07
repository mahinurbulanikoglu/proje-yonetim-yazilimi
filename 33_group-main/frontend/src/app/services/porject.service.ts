import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'app/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/project';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(updatedProject: Project): Observable<Project> {
    return this.http.put<Project>(this.apiUrl, updatedProject);
  }

  deleteProject(projectId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${projectId}`;
    return this.http.delete<void>(deleteUrl);
  }
}