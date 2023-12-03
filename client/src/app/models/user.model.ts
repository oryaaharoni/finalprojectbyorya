class User {

    constructor( public _id = "",
      public username = "",
      public password = "",
      public email = "",
      public fullname= "",
      public state = false,
      public friends : User[] = [] )
      {
  
      }
  }
  export default User;