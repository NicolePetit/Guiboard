import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Publisher, UncompletedPublisher } from './publisher.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  publishers$: BehaviorSubject<Publisher[]> = new BehaviorSubject<Publisher[]>(
    []
  );
  publisherById$: BehaviorSubject<Publisher | null> =
    new BehaviorSubject<Publisher | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  addPublisher(publisher: Publisher | UncompletedPublisher) {
    this.http
      .post('http://localhost:3000/api/guiboard/publishers', publisher)
      .subscribe(() => {
        this.router.navigate(['/publishers']);
        this.findAllPublishers();
      });
  }
  updatePublisher(publisher: Publisher, id:string) {
    console.log(publisher);
    this.http
      .patch(
        `http://localhost:3000/api/guiboard/publishers/${id}/update`,publisher)
      .subscribe(() => {
        this.router.navigate(['/publishers']);
        this.findAllPublishers();
      });
  }
  removePublisher(id: string) {
    this.http
      .delete(`http://localhost:3000/api/guiboard/publishers/${id}/delete`)
      .subscribe();
  }

  findOnePublisher(paramsId: string) {
    this.http
      .get(`http://localhost:3000/api/guiboard/publishers/${paramsId}`)
      .subscribe((responseData) => {
        this.publisherById$.next(new Publisher(responseData));
        //console.log(this.publisherById$.value);
      });
  }

  findAllPublishers() {
    this.http
      .get('http://localhost:3000/api/guiboard/publishers')
      .pipe(
        map((publishers) =>
          (publishers as any[]).map((publisher) => new Publisher(publisher))
        )
      )
      .subscribe((responseData) => {
        this.publishers$.next(responseData);
      });
  }
}
