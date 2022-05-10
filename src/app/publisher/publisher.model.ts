export enum Gender {
  male="Proclamateur",
  female="Proclamatrice",
}
enum Hope {
  anointed,
  otherSheep,
}
type Address = {
  country: string,
  county : string,
  zipCode: number;
  city: string;
  adressLine1: string;
  adressLine2?: string;
};

export class Publisher {
  constructor(
    public lastName: string,
    public firstName: string,
    public hope: Hope,
    public birthdate: Date,
    public baptismDate: Date,
    public gender: Gender,
    public phoneNumber: string,
    public emergencyContact: string,
    public adress: Address,
    public elder?: boolean,
    public ministerialServant?: boolean,
    public commonPrivileges?: string[],
    public brotherPrivileges?: string[],
  ) {}
}
