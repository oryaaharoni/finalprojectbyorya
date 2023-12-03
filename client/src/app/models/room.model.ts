import Message from "./message.model";
import User from "./user.model";

class Room {

    constructor( public id=0,
    public roomName: string = "",
    public messages : Message[] = [],
    public contacts: User[] = [])
      {
  
      }
  }
  export default Room;