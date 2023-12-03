import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  usernameT:any ="";
 

  constructor(private userService: UserServiceService,private router: Router) {
  
  }

  logOut(){
  //  maybe add check if local storage token and username is not null
  
    this.usernameT = this.userService.getUserName();
    this.userService.updateUserStateLogout(this.usernameT).subscribe(
        () => {
            console.log("User state updated successfully");
        },
        error => {
            console.log("Error updating user state:", error);
        }
    );
    this.userService.Exit();
    this.router.navigateByUrl('/');
  }

}
