import { Injectable } from '@angular/core';
import Room from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomServiceService {
  roomsArray: Room[] = [];

  constructor() {}

  newRoom(room: Room) {
    this.roomsArray.push(room);

    console.log('room: ');
    console.log(room);
    console.log('roomsArray: ');
    console.log(this.roomsArray);
  }

  checkRoom(roomname: string, user1: string, user2: string) {
    let count=0;
    this.roomsArray.map((r) => {
      // let room = r.roomName== roomname;
      console.log(this.roomsArray)
      if (r.roomName == roomname) {
        let room = r as Room;
        console.log('room: ', room);

        r.contacts.map((u)=>{
          if (u.username== user1){
            count++;
          }
          else if (u.username== user2){
            count++;
          }
          // else if (count==2){
          //   return room;
          // }
          
        })
      } 
      // else {
      //   return null;
      // }
    });
  }
}
