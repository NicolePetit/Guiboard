import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { Publisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent implements OnInit,AfterViewInit, OnDestroy {
  publishers: Publisher[] = this.publservice.publishers;
  displayedColumns: string[] = ['lastName', 'firstName', 'gender'];
  dataSource = new MatTableDataSource(this.publishers);
  sub: Subscription;

  constructor(public publservice: PublisherService) {}

  @ViewChild(MatSort) sort: MatSort;
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
}

  ngOnInit(): void {

    this.sub = this.publservice.publishersChanged.subscribe(
      (publishers: Publisher[]) => {
        this.publishers = publishers;
        this.dataSource.data=publishers;
        this.dataSource.filterPredicate = (data: Publisher, filter: string) => {
          return (
            data.lastName.toLowerCase().includes(filter) ||
            data.firstName.toLowerCase().includes(filter) ||
            data.gender.toLowerCase().includes(filter)
          );
        };
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
