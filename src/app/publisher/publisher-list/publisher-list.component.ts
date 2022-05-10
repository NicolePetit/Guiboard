import { Component, OnInit } from '@angular/core';
import { Publisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';


@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent implements OnInit {
  publishers :Publisher[]=this.publservice.publishers;
  displayedColumns: string[] = ['name', 'surname', 'gender'];
  dataSource = this.publishers;

  constructor( public publservice : PublisherService) { }

  ngOnInit(): void {

  }

}
