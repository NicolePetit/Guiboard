/* eslint-disable linebreak-style */
enum Gender {
    male = "Proclamateur",
    female = "Proclamatrice",
  }
  enum Hope {
    anointed = "anointed",
    otherSheep = "otherSheep",
  }
class Address {
  country: string = "";
  county: string = "";
  zipCode: number | string = "";
  city: string = "";
  adressLine1: string = "";
  adressLine2?: string = "";
  constructor(
      country?: string,
      county?: string,
      zipCode?: number | string,
      city?: string,
      adressLine1?: string,
      adressLine2?: string,
  ) {
    if (country) {
      this.country = country;
    }
    if (county) {
      this.county = county;
    }
    if (zipCode) {
      this.zipCode = zipCode;
    }
    if (city) {
      this.city = city;
    }
    if (adressLine1) {
      this.adressLine1 = adressLine1;
    }
    if (adressLine2) {
      this.adressLine2 = adressLine2;
    }
  }
}

export class PublisherModel {
  completed: boolean;
  lastName: string;
  firstName: string;
  hope: Hope | null;
  birthdate: Date | null;
  baptismDate: Date | null;
  gender: Gender | null;
  phoneNumber: string | null;
  emergencyContact: string | null;
  adress: Address | null;
  elder?: boolean | null;
  ministerialServant?: boolean | null;
  commonPrivileges?: string[] | null;
  brotherPrivileges?: string[] | null;
  constructor(
      completedOrNot: boolean,
      lastName?: string,
      firstName?: string,
      hope?: Hope | null,
      birthdate?: Date | null,
      baptismDate?: Date | null,
      gender?: Gender | null,
      phoneNumber?: string | null,
      emergencyContact?: string | null,
      adress?: Address | null,
      elder?: boolean | null,
      ministerialServant?: boolean | null,
      commonPrivileges?: string[] | null,
      brotherPrivileges?: string[] | null,
  ) {
    this.completed = completedOrNot;
    this.lastName = lastName || "";
    this.firstName = firstName || "";
    this.hope = hope || null;
    this.birthdate = new Date(birthdate || " 2000,1,1");
    this.baptismDate = new Date(baptismDate || " 2000,1,1");
    this.gender = gender || null;
    this.phoneNumber = phoneNumber || null;
    this.emergencyContact = emergencyContact || null;
    this.adress = adress || null;
    this.elder = elder;
    this.ministerialServant = ministerialServant;
    this.commonPrivileges = commonPrivileges || null;
    this.brotherPrivileges = brotherPrivileges || null;
  }
}
