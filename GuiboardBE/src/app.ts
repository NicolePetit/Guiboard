/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import express from "express";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 2000;

enum Gender {
  male = "Proclamateur",
  female = "Proclamatrice",
}
enum Hope {
  anointed,
  otherSheep,
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
    adressLine2?: string
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

class Publisher {
  completed: boolean = false;
  id: string | number = "";
  lastName: string;
  firstName: string = "";
  hope: Hope | "" = "";
  birthdate: Date | "" = "";
  baptismDate: Date | "" = "";
  gender: Gender | null = null;
  phoneNumber: string = "";
  emergencyContact: string = "";
  adress: Address | "" = "";
  elder?: boolean | "" = "";
  ministerialServant?: boolean | "" = "";
  commonPrivileges?: string[] = [];
  brotherPrivileges?: string[] = [];

  constructor(
    completed: boolean,
    lastName?: string,
    firstName?: string,
    hope?: Hope | "",
    birthdate?: Date | "",
    baptismDate?: Date | "",
    gender?: Gender | "",
    phoneNumber?: string,
    emergencyContact?: string,
    adress?: Address | "",
    elder?: boolean | "",
    ministerialServant?: boolean | "",
    commonPrivileges?: string[],
    brotherPrivileges?: string[]
  ) {
    this.completed = completed;
    this.id = uuidv4();
      this.lastName = lastName || "";
    if (firstName) {
      this.firstName = firstName;
    }
    if (hope) {
      this.hope = hope;
    }
    if (birthdate) {
      this.birthdate = new Date(birthdate);
    }
    if (baptismDate) {
      this.baptismDate = new Date(baptismDate);
    }
    if (gender) {
      this.gender = gender;
    }
    if (phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
    if (emergencyContact) {
      this.emergencyContact = emergencyContact;
    }
    if (adress) {
      this.adress = adress;
    }
    this.elder = elder;
    this.ministerialServant = ministerialServant;
    this.commonPrivileges = commonPrivileges;
    this.brotherPrivileges = brotherPrivileges;
  }
}

app.get("/api/guiboard/publishers", (req, res) => {
  res.send(publishers);
});
app.post("/api/guiboard/publishers", (req, res) => {
  const publisher = req.body;

  publisher.id = uuidv4();
  publishers.push(publisher);
  res.end();
});
app.get("/api/guiboard/publishers/:id", (req, res) => {
  if (req.params.id) {
    const publisher = publishers.find(
      (publisher) => publisher.id == req.params.id
    );
    res.send(publisher);
  }
});
app.delete("/api/guiboard/publishers/:id/delete", (req, res) => {
  const index = publishers.findIndex(
    (publisher) => publisher.id == req.params.id
  );
  publishers.splice(index, 1);
  res.end();
});
app.patch("/api/guiboard/publishers/:id/update", (req, res) => {
  const index = publishers.findIndex(
    (publisher) => publisher.id == req.params.id
  );
  publishers.splice(index, 1, publishers[index]);
  res.end();
});

const publishers: Publisher[] = [
  new Publisher(
    true,
    "Bonjour",
    "Carengueude",
    1,
    new Date(1999, 5, 1),
    new Date(2004, 7, 7),
    Gender.female,
    "044 253 52 64",
    "Mamie Lou 065 487 489 57 55",
    {
      country: "France",
      county: "Paris",
      zipCode: 1499,
      city: "Paris",
      adressLine1: "rue du Molard 47",
      adressLine2: "appt 16-b",
    },
    undefined,
    undefined,
    ["Pionnier"]
  ),
  new Publisher(
    true,
    "Salut",
    "Carengueude",
    1,
    new Date(1999, 5, 1),
    new Date(2004, 7, 7),
    Gender.female,
    "044 253 52 64",
    "Mamie Lou 065 487 489 57 55",
    {
      country: "France",
      county: "Paris",
      zipCode: 1499,
      city: "Paris",
      adressLine1: "rue du Molard 47",
      adressLine2: "appt 16-b",
    },
    undefined,
    undefined,
    ["coucou", "je suis", "un privilege"]
  ),
  new Publisher(
    true,
    "Dutoit",
    "Carengueude",
    1,
    new Date(1999, 5, 1),
    new Date(2004, 7, 7),
    Gender.female,
    "044 253 52 64",
    "Mamie Lou 065 487 489 57 55",
    {
      country: "France",
      county: "Paris",
      zipCode: 1499,
      city: "Paris",
      adressLine1: "rue du Molard 47",
      adressLine2: "appt 16-b",
    },
    undefined,
    undefined,
    ["coucou", "je suis", "un privilege"]
  ),
  new Publisher(
    true,
    "Corgi",
    "Walter",
    0,
    new Date(1954, 25, 11),
    new Date(1971, 2, 2),
    Gender.male,
    "044 253 52 64",
    "Mamie Lou 065 487 489 57 55",
    {
      country: "Germany",
      county: "Osef",
      zipCode: 1499,
      city: "Paris",
      adressLine1: "rue du Molard 47",
      adressLine2: "appt 16-b",
    },
    true,
    undefined,
    ["Pionnier"],
    ["serviteur aux comptes"]
  ),
];

app.listen(port, (err: void) => {
  if (err!) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
