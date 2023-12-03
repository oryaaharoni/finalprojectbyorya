import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { SocketioServiceService } from 'src/app/services/socketio-service.service';
import Room from 'src/app/models/room.model';
import Message from 'src/app/models/message.model';
import { FriendsServiceService } from 'src/app/services/friends-service.service';
import { RoomServiceService } from 'src/app/services/room-service.service';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {

  roomname: string = '';
  secondUserName: string = '';
  userfriends: any[] = [];
  currentUser: any = '';
  message: string = '';
  date:Date = new Date();
  msglist: Message[] = [];
  btnfriends: boolean = false;
  btnEnterRoomName:boolean=false;
  btnShowChat:boolean=false;


  // room1: Room = new Room();
  // u1:User= new User();
  // u2:User= new User();
  // ttu: User[]= [];
  // c:number=0;
  // roomsArr:any= {
  //   id:0,
  //   roomName: "a",
  //   messages:[],
  //  contacts:[]
  // };
  constructor(
    private socketService: SocketioServiceService,
    private userService: UserServiceService,
    private friendsService: FriendsServiceService,
    // private roomService: RoomServiceService
    ) 
    {
    this.socketService.setupSocketConnection();
    this.currentUser = this.userService.getUserName();

    //maybe delete
    this.friendsService
      .getPrivateFriendsList(this.currentUser)
      .subscribe((data) => {
        (data as any[]).map((u) => {
          this.userService.getById(u).subscribe((data) => {
            this.userfriends.push(data);   
          });
        });
      });

    this.socketService.socket.on('join', () => {
    });

    this.socketService.socket.on('chatmessage', (msg: any) => {
      this.msglist.push(msg); 
    });
  }

  createNewRoom() {
    // this.userService.getUserByUserName(this.currentUser).subscribe((res)=>{
    //   this.u1= res as User;
    //   console.log("u1", this.u1)
    //   this.ttu.push(this.u1);
    // })

    console.log(
      'user: ' +
        this.currentUser +
        ' create new room with user: ' +
        this.secondUserName
    );
    // let v=  this.roomService.checkRoom(this.roomname,this.currentUser, this.secondUserName);
    // console.log(v);

    // if (v==undefined) {
    //   this.userService.getUserByUserName(this.secondUserName).subscribe((res)=>{
    //     this.u2= res as User;
    //     console.log("u2", this.u2)
    //     this.ttu.push(this.u2)

    //     let a= new Room(this.c,this.roomname,this.msglist, this.ttu as any[]);
    //     console.log("room", a)
    //     this.roomService.newRoom(a);
    //     this.c++;
    //     this.roomsArr.push(a);
    //     console.log("roomsArr", this.roomsArr)

      //   this.socketService.joinRoom(this.roomname);
      //   this.btnEnterRoomName=false;
      //   this.btnfriends=true;
      //   this.btnShowChat=true;
  
      // })
      
     


      this.socketService.joinRoom(this.roomname);
      this.btnEnterRoomName=false;
      this.btnfriends=true;
      this.btnShowChat=true;


    // }
    // else{
    //   this.room1= v as Room;
    //   console.log("room1",v);
    // }

   

    // add here check if the room contain this users
    // console.log(a);
     
     
     
    // }
  
  }

  sendMsg() {
    let m = new Message(this.date, this.message, this.currentUser);
    this.socketService.sendMsgToRoom(this.roomname, m);
    this.msglist.push(m);
  }

  getRoomName(){
    console.log(this.secondUserName)
    if (this.secondUserName == ""){
      alert("Please choose any friend");
    }
    else{
      this.btnEnterRoomName=true;
      this.btnShowChat=false;
      this.btnfriends=true;
    }

  }
}
