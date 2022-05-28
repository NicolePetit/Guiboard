import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconService } from 'src/shared/icon.service';
import { Publisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.scss'],
})
export class PublisherDetailsComponent implements OnInit {
  publisher: Publisher;

  constructor(
    public icon: IconService,
    public publsService: PublisherService,
    private routeID: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.routeID.snapshot.params['id'];
    this.publisher = this.publsService.findOnePublisher(id)!;
    console.log(this.publisher.gender);

  }
}
