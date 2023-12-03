import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import User from 'src/app/models/user.model';
import { FriendsServiceService } from 'src/app/services/friends-service.service';
import { SocketioServiceService } from 'src/app/services/socketio-service.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css'],
})
export class FriendRequestComponent {
  currentUserName: any = '';
  users: any[] = [];
  currentUser: User = new User();
  friendsIds: any[] = [];

  checkUser: any;

  constructor(private userService: UserServiceService, private friendsService: FriendsServiceService, private socketService: SocketioServiceService) {
    
    this.socketService.setupSocketConnection();
    this.currentUserName = this.userService.getUserName();

    this.userService.get().subscribe((data) => {
      this.users = data as User[];

      this.userService
        .getUserByUserName(this.currentUserName)
        .subscribe((res) => {
          this.currentUser = res as User;
          this.friendsIds = this.currentUser.friends as any[];

          let aa = this.users.map((t) => {
            if (this.friendsIds.includes(t._id)) t.myfriend = true;
            else t.myfriend = false;
            return t;
          });
         
           //check why i got all users in red and not the exsisted user  
          
           this.socketService.socket.on('newfriend', (userId: any) => {
            this.friendsIds.push(userId);
            this.users.map((t) => {
              if (t._id == this.currentUser._id) t.friends.push(userId);
              if (this.friendsIds.includes(t._id)) t.myfriend = true;
             
              else t.myfriend = false;
            });
          });
      
      
          this.socketService.socket.on('deletefriend', (userId: any) => {
            let index = this.friendsIds.findIndex(item=> item == userId);
            this.friendsIds.splice(index,1);
      
             this.users.map((t) => {
              if (t._id == this.currentUser._id) t.friends.splice(index,1);
              if (this.friendsIds.includes(t._id)) t.myfriend = true;
              else t.myfriend = false;
            });
          });
        });
    });
  }

  sendFriendRequest(recipientUsername: string) {
    this.userService.getUserByUserName(recipientUsername).subscribe((res) => {
      this.checkUser = res as User;
      // let r = this.checkUser;
      // console.log('check user: ' + this.checkUser);
      // console.log({ r });

      this.socketService.onNewFriend(this.checkUser._id);
      // console.log('ttttt');
    });

    this.friendsService
      .sendFriendRequest(this.currentUserName, recipientUsername)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );

    recipientUsername = '';
    this.checkUser = '';
  }

  removeRequest(recipientUsername: string) {
    this.userService.getUserByUserName(recipientUsername).subscribe((res) => {
      this.checkUser = res as User;
      // let r = this.checkUser;
      // console.log('check user: ' + this.checkUser);
      // console.log({ r });

      this.socketService.onRemoveFriend(this.checkUser._id);
      // console.log('ttttt');
    });

    this.friendsService
      .removeFriendRequest(this.currentUserName, recipientUsername)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    recipientUsername = '';
    this.checkUser = '';
  }
}
