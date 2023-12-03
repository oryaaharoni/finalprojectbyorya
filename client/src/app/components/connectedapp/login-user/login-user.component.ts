import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { SocketioServiceService } from 'src/app/services/socketio-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  
  username: string = "";
  password: string = "";

  constructor(private userService: UserServiceService, private router: Router) {

  }

  // להוסיף אבנט של עידכון 
  loginUser() {
    this.userService.login(this.username, this.password)
        .subscribe((data: any) => {
            this.userService.storeToken(data.token);
            this.userService.storeUserName(data.username);
            
            this.updateUserState(data.username); 
            
            alert("User login successful");
            this.router.navigateByUrl('/optiongame');
        }, error => {
            alert(error.error);
            console.log(error);
        });
}

updateUserState(username: string) {
    this.userService.updateUserStateLogin(username).subscribe(
        () => {
            console.log("User state updated successfully");
        },
        error => {
            console.log("Error updating user state:", error);
        }
    );
}

  
}
