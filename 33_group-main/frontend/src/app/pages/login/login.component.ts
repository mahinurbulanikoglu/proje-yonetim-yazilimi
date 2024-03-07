import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  error:string = null;

  submit() {
    if (this.form.valid) {
      this.userService.login(this.form.value.username, this.form.value.password).subscribe((response) => {
        if(response) {
          localStorage.setItem("auth", "true")
          this.router.navigate(['/project']);
        }
      });
    } else {
      this.error = "Wrong username or password";
    }
  }
}
