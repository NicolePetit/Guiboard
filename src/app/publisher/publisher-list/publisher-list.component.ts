import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { Publisher, UncompletedPublisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  displayedColumns: string[] = ['lastName', 'firstName', 'gender'];
  dataSource: MatTableDataSource<Publisher> = new MatTableDataSource();
  sub: Subscription;
  publisherFormGroup: FormGroup;
  publisher: Publisher;
  uncompletedPublisher : UncompletedPublisher;
  addNewPublisher = false;

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

    //******************************************************************* */
    this.publisherFormGroup = new FormGroup({
      lastNameCtrl: new FormControl('', Validators.required),
      firstNameCtrl: new FormControl('', Validators.required),
      genderCtrl: new FormControl('', Validators.required),
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onRowClick(id: any) {
    this.router.navigate([`/publishers/publisher-detail/${id}`]);
  }
  onClickAddPublisher() {
    this.router.navigate(['/publishers/manage-publisher']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  // add quick publisher

  managePublisher() {
    this.uncompletedPublisher = {
      completed:false,
      id: uuidv4(),
      lastName: this.publisherFormGroup.get('lastNameCtrl')?.value,
      firstName: this.publisherFormGroup.get('firstNameCtrl')?.value,
      gender:  this.publisherFormGroup.get('genderCtrl')?.value,
    };
    return this.uncompletedPublisher;
  }

  onSubmit() {
    this.managePublisher();
    this.publservice.addPublisher(this.uncompletedPublisher);
    this.addNewPublisher=false;
  }
  onClickQuickAddPublisher(){
    this.addNewPublisher=true;
  }
  getErrorMessage() {
    if (this.publisherFormGroup.get('lastNameCtrl')?.hasError('required')) {
      return 'Champ obligatoire';
    }

    return this.publisherFormGroup.get('lastNameCtrl')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
