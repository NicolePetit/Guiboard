enum Gender {
  male,
  female,
}
enum Hope {
  anointed,
  otherSheep,
}
type Address = {
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
    public birthdate: string,
    public baptismDate: string,
    public gender: Gender,
    public pioneer: boolean,
    public phoneNumber: string,
    public emergencyContact: string,
    public adress: Address,
    public elder?: boolean,
    public ministerialServant?: boolean,
    public privileges?: string[]
  ) {}
}
