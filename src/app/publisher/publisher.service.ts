import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gender, Publisher } from './publisher.model';


@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  publishersChanged = new Subject<Publisher[]>();
  publishers: Publisher[] = [
    new Publisher(
      'Dutoit',
      'Carengueude',
      1,
      new Date(1999, 5, 1),
      new Date(2004, 7, 7),
      Gender.female,
      '044 253 52 64',
      'Mamie Lou 065 487 489 57 55',
      {
        country : 'France',
        county : 'Paris',
        zipCode: 1499,
        city: 'Paris',
        adressLine1: 'rue du Molard 47',
        adressLine2: 'appt 16-b',
      },
      undefined,
      undefined,
      ['coucou', 'je suis', 'un privilege']
    ),
    new Publisher(
      'Dutoit',
      'Carengueude',
      1,
      new Date(1999, 5, 1),
      new Date(2004, 7, 7),
      Gender.female,
      '044 253 52 64',
      'Mamie Lou 065 487 489 57 55',
      {
        country : 'France',
        county : 'Paris',
        zipCode: 1499,
        city: 'Paris',
        adressLine1: 'rue du Molard 47',
        adressLine2: 'appt 16-b',
      },
      undefined,
      undefined,
      ['coucou', 'je suis', 'un privilege']
    ),
    new Publisher(
      'Dutoit',
      'Carengueude',
      1,
      new Date(1999, 5, 1),
      new Date(2004, 7, 7),
      Gender.female,
      '044 253 52 64',
      'Mamie Lou 065 487 489 57 55',
      {
        country : 'France',
        county : 'Paris',
        zipCode: 1499,
        city: 'Paris',
        adressLine1: 'rue du Molard 47',
        adressLine2: 'appt 16-b',
      },
      undefined,
      undefined,
      ['coucou', 'je suis', 'un privilege']
    ),
    new Publisher(
      'Corgi',
      'Walter',
      0,
      new Date(1954, 25, 11),
      new Date(1971, 2, 2),
      Gender.male,
      '044 253 52 64',
      'Mamie Lou 065 487 489 57 55',
      {
        country : 'Germany',
        county : 'Osef',
        zipCode: 1499,
        city: 'Paris',
        adressLine1: 'rue du Molard 47',
        adressLine2: 'appt 16-b',
      },
      true,
      undefined,
      ['coucou', 'je suis', 'un autre privilege']
    ),
  ];

  constructor() {}


  addPublisher(publisher:Publisher) {
    this.publishers.push(publisher);
    this.publishersChanged.next(this.publishers.slice())

  }
  updatePublisher() {}
  removePublisher() {}
  findOnePublisher() {}
  findAllPublishers() {}
}
