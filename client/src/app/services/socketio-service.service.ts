import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import User from '../models/user.model';
import Message from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class SocketioServiceService {
  socket: any;

  private Url = 'http://localhost:8080';

  constructor() {}

  setupSocketConnection() {
    this.socket = io(this.Url);
  }

  sendMessage(message: string) {
    this.socket.emit('onmessage', message);
  }

  
  
  onNewFriend(userId: string) {
    this.socket.emit('addfriend', userId);
  }

  onRemoveFriend(userId: string) {
    this.socket.emit('removefriend', userId);
  }

  // onLoginState(username: string) {
  //   this.socket.emit('updatetologin', username);
  // }

  // onLogoutState(userId: string) {
  //   this.socket.emit('updatetologout', userId);
  // }


 //maybe remove
  // getMessage = () => {
  //   return new Observable<any>((observer) => {
  //     this.socket.on('onmessage', (message: any) => {
  //       observer.next(message);
  //     });
  //   });
  // };

  // newFriend() {
  //   return new Observable<string>((observer:any) => {
  //     this.socket.on('newFriend', (userId: any) => {
  //       observer.next(userId);
  //     });
  //   });
  // };


  
  joinRoom(room: string){
    this.socket.emit('join', room);
  }

  sendMsgToRoom(room: string, message:Message){
    this.socket.emit('chat message',room, message);
  }
 
}
