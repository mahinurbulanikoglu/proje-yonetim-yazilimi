import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl('', Validators.required),
  });

  error:string = null;

  submit() {
    if (this.form.valid) {
      const password = this.form.value.password;
      const passwordAgain = this.form.value.passwordAgain;

      if (password === passwordAgain) {
        this.userService.register(this.form.value.username, password).subscribe((response) => {
          if (response) {
            this.router.navigate(['/login']);
          }
        });
      } else {
        this.error = "Passwords do not match.";
      }
    }
  }
}
