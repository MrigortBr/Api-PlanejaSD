export class UsersRegisters {
  private _id: number;
  private _username: string | null;
  private _email: string | null;
  private _password: string;
  private _typeId: number;
  private _createdAt: Date;
  private _deletedAt: Date | null;
  private _cpf: string | null;
  private _cellphone: string | null;

  constructor(user: UsersRegistersType) {
    this._id = user.id;
    this._username = user.username;
    this._email = user.email;
    this._password = user.password;
    this._typeId = user.type_id;
    this._createdAt = user.created_at;
    this._deletedAt = user.deleted_at;
    this._cpf = user.cpf;
    this._cellphone = user.cellphone;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string | null {
    return this._username;
  }

  set username(value: string | null) {
    this._username = value;
  }

  get email(): string | null {
    return this._email;
  }

  set email(value: string | null) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get typeId(): number {
    return this._typeId;
  }

  set typeId(value: number) {
    this._typeId = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get deletedAt(): Date | null {
    return this._deletedAt;
  }

  set deletedAt(value: Date | null) {
    this._deletedAt = value;
  }

  get cpf(): string | null {
    return this._cpf;
  }

  set cpf(value: string | null) {
    this._cpf = value;
  }

  get cellphone(): string | null {
    return this._cellphone;
  }

  set cellphone(value: string | null) {
    this._cellphone = value;
  }
}

export type UsersRegistersType = {
  id: number;
  username: string | null;
  email: string | null;
  password: string;
  type_id: number;
  created_at: Date;
  deleted_at: Date | null;
  cpf: string | null;
  cellphone: string | null;
};
