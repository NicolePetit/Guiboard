import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Publisher } from './publisher.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  publishers$: BehaviorSubject<Publisher[]> = new BehaviorSubject<Publisher[]>([]);
  publisherById$: BehaviorSubject<Publisher | null> =new BehaviorSubject<Publisher | null>(null);

  constructor(private http: HttpClient) {}

  addPublisher(publisher: Publisher) {
    const publishers = this.publishers$.value;
    publishers.push(publisher);
    this.publishers$.next(publishers);
  }

  updatePublisher() {}
  removePublisher() {}

  findOnePublisher(paramsId: string) {
    this.http
      .get(`http://localhost:3000/api/guiboard/publishers/${paramsId}`)
      .subscribe((responseData) => {
        this.publisherById$.next(new Publisher(responseData));
      });
  }

  findAllPublishers() {
    this.http
      .get('http://localhost:3000/api/guiboard/publishers').pipe(map((publishers)=> (publishers as any[]).map(publisher=>new Publisher(publisher))))
      .subscribe((responseData) => {
        this.publishers$.next(responseData);
      });
  }
}
