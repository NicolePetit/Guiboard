import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
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
  dataSource = new MatTableDataSource(this.publishers);
  sub: Subscription;

  constructor( public publservice : PublisherService) { }

  ngOnInit(): void {
    this.sub = this.publservice.publishersChanged.subscribe(
      (publishers: Publisher[]) => {
        this.publishers = publishers;
        this.dataSource = new MatTableDataSource(this.publishers);
        this.dataSource.filterPredicate = (data: Publisher, filter: string) => {
          return data.lastName.toLowerCase().includes(filter) || data.firstName.toLowerCase().includes(filter) || data.gender.toLowerCase().includes(filter)
        };
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
