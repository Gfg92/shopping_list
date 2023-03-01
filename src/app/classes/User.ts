class User {
    private userName: string;
    private password: string;
    
    constructor(userName: string, password:string) {
      this.userName = userName;
      this.password =password;
    }
    getUserName(): string {
      return this.userName;
    }
    getPassword():string{
        return this.password;
    }
  
    setUserName(value: string) {
      this.userName = value;
    }

    setPassword(value: string) {
        this.password = value;
      }
  }
  export{User}