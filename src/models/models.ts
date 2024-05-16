export class Squirrel {
  constructor(
    public id: number,
    public url: string,
    public username: string,
    public password: string,
  ) {}
}

export class SquirrelDisplay {
  constructor(
    public id: number,
    public url: string,
    public username: string,
    public password: string,
    public isBeingEdited: boolean = false,
  ) {}
}

export class Profile {
	constructor(
    ID: string,
	  Nickname: string,
	  Email: string,
  ){}
  
}

export class Credentials {
  constructor(
    Password: string,
	  Nickname: string,
	  Email: string,
	  ID: string,
  )
  {}
}
