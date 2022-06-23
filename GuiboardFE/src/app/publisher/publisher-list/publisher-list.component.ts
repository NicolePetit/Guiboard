import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { Publisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['lastName', 'firstName', 'gender'];
  dataSource: MatTableDataSource<Publisher> = new MatTableDataSource();
  sub: Subscription;
  publisher: Publisher;

  constructor(public publservice: PublisherService, public router: Router) {}

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
 }
  ngOnInit(): void {
    this.sub = this.publservice.publishers$.subscribe(
      (publishers: Publisher[]) => {
        this.dataSource.data = publishers;
        this.dataSource.filterPredicate = (data: Publisher, filter: string) => {
          return (
            data.lastName.toLowerCase().includes(filter) ||
            data.firstName.toLowerCase().includes(filter) ||
            data.gender.toLowerCase().includes(filter)
          );
        };
      }
    );
    this.publservice.findAllPublishers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onRowClick(publisher: any) {
    if (publisher.completed) {
      this.router.navigate([`/publishers/${publisher.id}/publisher-detail`]);
    } else {
      console.log("c'est le caca");
      this.router.navigate([`/publishers/${publisher.id}/manage-publisher`]);
    }
  }
  onClickAddPublisher() {
    this.router.navigate(['/publishers/new-publisher']);
  }
  onClickQuickAddPublisher() {
    this.router.navigate(['/publishers/new-quick-publisher']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
