import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publisher } from '../publisher.model';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-publisher-quick-add',
  templateUrl: './publisher-quick-add.component.html',
  styleUrls: ['./publisher-quick-add.component.scss']
})
export class PublisherQuickAddComponent implements OnInit {
  publisherFormGroup: FormGroup;
  newPublisher: Publisher;

  constructor( private publservice : PublisherService, private router:Router) { }

  ngOnInit(): void {
    this.publisherFormGroup = new FormGroup({
      lastNameCtrl: new FormControl('', Validators.required),
      firstNameCtrl: new FormControl('', Validators.required),
      genderCtrl: new FormControl('', Validators.required),
    });
  }

  onClickToReturn(event:any){
if (event.composedPath().find((data:any)=>data.nodeName=== "MAT-CARD")){
  return
}else{
  this.router.navigate(['/publishers']);
}
  }


  managePublisher() {
    const obj= {
      completed:false,
      lastName: this.publisherFormGroup.get('lastNameCtrl')?.value,
      firstName: this.publisherFormGroup.get('firstNameCtrl')?.value,
      gender:  this.publisherFormGroup.get('genderCtrl')?.value,
    };
    this.newPublisher= new Publisher(obj);
    return this.newPublisher;
  }

  onSubmit() {
    this.managePublisher();
    this.publservice.addPublisher(this.newPublisher);
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


