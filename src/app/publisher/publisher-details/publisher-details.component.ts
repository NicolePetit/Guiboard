import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { DateUtil } from 'src/app/utils/dates';
import { IconService } from 'src/shared/icon.service';
import { Publisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.scss'],
})
export class PublisherDetailsComponent implements OnInit, OnDestroy {
  publisher: Publisher;
  sub: Subscription;
  id: string;

  constructor(
    public icon: IconService,
    public publservice: PublisherService,
    private routeID: ActivatedRoute,
    public dateUtil: DateUtil,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.routeID.snapshot.params['id'];
    this.sub = this.publservice.publisherById$
      .pipe(filter((data) => !!data))
      .subscribe((publisherFound) => {
        this.publisher = publisherFound!;
      });
    this.publservice.findOnePublisher(this.id);
  }
  onClickToModify(){
this.router.navigate([`/publishers/${this.id}/manage-publisher`]);
  }
  onClickToDelete(){
    this.publservice.removePublisher(this.id);
    this.router.navigate(["/publishers"])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
