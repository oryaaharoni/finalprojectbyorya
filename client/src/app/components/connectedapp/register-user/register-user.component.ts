import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import User from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user: User = {
    _id:"",
    username:"",
    password:"",
    email :"",
    fullname: "" ,
    state: false,
    friends: []
  }

  constructor(private userService: UserServiceService, private router: Router) {

  }

  registerUser() {
    this.userService.post(this.user).subscribe(
      (data) => {
        alert('User Registered');
        this.router.navigateByUrl('/login');
        console.log(data);
      },
      (error) => {
        alert('Username already exists Select another one please');
        console.log(error);
      }
    );
  }
}
