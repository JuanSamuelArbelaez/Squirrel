export interface Squirrel {
  id: string,
  url: string,
  user_id: string,
  username: string,
  password: string,
}

export class SquirrelDisplay {
  constructor(
    public id: string,
    public url: string,
    public username: string,
    public password: string,
    public isBeingEdited: boolean = false,
  ) {}
}

export interface Profile {
  ID: string,
  Nickname: string,
  Email: string,
}

export interface Credentials {
  Password: string,
  Nickname: string,
  Email: string,
  ID: string,
}
