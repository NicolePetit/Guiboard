export enum Gender {
  male = 'Proclamateur',
  female = 'Proclamatrice',
}
enum Hope {
  anointed = 'anointed',
  otherSheep = 'otherSheep',
}
type Address = {
  country: string;
  county: string;
  zipCode: number;
  city: string;
  adressLine1: string;
  adressLine2?: string;
};

export class Publisher {
  completed:boolean;
  id?: string;
  lastName: string;
  firstName: string;
  hope: Hope;
  birthdate: Date;
  baptismDate: Date;
  gender: Gender;
  phoneNumber: string;
  emergencyContact: string;
  adress: Address;
  elder?: boolean;
  ministerialServant?: boolean;
  commonPrivileges?: string[];
  brotherPrivileges?: string[];

  constructor(obj?: any) {
    if (obj) {
      this.completed=true;
      this.id = obj.id;
      this.lastName = obj.lastName;
      this.firstName = obj.firstName;
      this.hope = obj.hope;
      if (obj.birthdate) {
        this.birthdate = new Date(obj.birthdate);
      }
      if (obj.baptismDate) {
        this.baptismDate = new Date(obj.baptismDate);
      }
      this.gender = obj.gender;
      this.phoneNumber = obj.phoneNumber;
      this.emergencyContact = obj.emergencyContact;
      this.adress = obj.adress;
      this.elder = obj.elder;
      this.ministerialServant = obj.ministerialServant;
      this.commonPrivileges = obj.commonPrivileges;
      this.brotherPrivileges = obj.brotherPrivileges;
    }
  }}

