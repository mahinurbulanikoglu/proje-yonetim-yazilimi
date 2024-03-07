import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<boolean> {
        const loginUrl = `${this.apiUrl}/login`;
        let user = {
            "username": username,
            "password": password
        }
        return this.http.post<boolean>(loginUrl, user);
    }

    register(username: string, password: string): Observable<boolean> {
        const loginUrl = `${this.apiUrl}/register`;
        let user = {
            "username": username,
            "password": password
        }
        return this.http.post<boolean>(loginUrl, user);
    }
}