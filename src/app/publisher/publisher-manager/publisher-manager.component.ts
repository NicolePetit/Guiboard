import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PublisherService } from '../publisher.service';
import { Publisher } from '../publisher.model';

@Component({
  selector: 'app-publisher-manager',
  templateUrl: './publisher-manager.component.html',
  styleUrls: ['./publisher-manager.component.scss'],
})
export class PublisherManagerComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  publisher: Publisher;
  isElder: boolean = false;
  isMinistryAssisstant: boolean = false;
  filteredcommonPrivilege: Observable<string[]>;
  commonPrivileges: string[] = [];
  allCommonPrivileges: string[] = [
    'Pionnier auxiliaire permanent',
    'Pionnier permanent',
    'Pionnier special',
    'Serviteur à la construction',
  ];
  filteredBrothersPrivilege: Observable<string[]>;
  brothersPrivileges: string[] = [];
  allBrothersPrivileges: string[] = [
    'Président',
    'Responsable de service',
    'Secretaire',
    'Responsable des comptes',
    "Responsable de l'ecole du ministère théocratique",
    "Responsable de l'entretien",
    'Service audio-visuel',
    'Service des micro',
    "Service d'acceuil",
  ];
  publisherFormGroup: FormGroup;
  commonPrivilegeCtrl: FormControl = new FormControl('');
  brothersPrivilegeCtrl: FormControl = new FormControl('');

  @ViewChild('commmonPrivilegeInput', { static: true })
  commmonPrivilegeInput: ElementRef<HTMLInputElement>;
  @ViewChild('brothersPrivilegeInput', { static: true })
  brothersPrivilegeInput: ElementRef<HTMLInputElement>;

  constructor(public publService: PublisherService) {
    this.filteredcommonPrivilege = this.commonPrivilegeCtrl.valueChanges.pipe(
      startWith(null),
      map((privilege: string | null) =>
        privilege
          ? this._filterPrivilege(privilege, this.allCommonPrivileges)
          : this.allCommonPrivileges.slice()
      )
    );
    this.filteredBrothersPrivilege =
      this.brothersPrivilegeCtrl.valueChanges.pipe(
        startWith(null),
        map((privilege: string | null) =>
          privilege
            ? this._filterPrivilege(privilege, this.allBrothersPrivileges)
            : this.allBrothersPrivileges.slice()
        )
      );
  }

  ngOnInit(): void {
    this.publisherFormGroup = new FormGroup({
      lastNameCtrl: new FormControl('', Validators.required),
      firstNameCtrl: new FormControl('', Validators.required),
      hopeCtrl: new FormControl(''),
      birthdateCtrl: new FormControl(''),
      baptismDateCtrl: new FormControl(''),
      genderCtrl: new FormControl(''),
      adressCtrlGroup: new FormGroup({
        countryCtrl: new FormControl(''),
        countyCtrl: new FormControl(''),
        cityCtrl: new FormControl(''),
        districtCtrl: new FormControl(''),
        zipCodeCtrl: new FormControl(''),
        adressFirstLineCtrl: new FormControl(''),
        adressSecondLineCtrl: new FormControl(''),
      }),
      phoneNumberCtrl: new FormControl(''),
      emergencyContactCtrl: new FormControl(''),
      particularStatusCtrl: new FormControl(''),
      commonPrivilegeCtrl: new FormControl(''),
      brothersPrivilegeCtrl: new FormControl(''),
    });
  }

  removePrivilege(privilege: string, privileges: string[]): void {
    const index = privileges.indexOf(privilege);
    if (index >= 0) {
      privileges.splice(index, 1);
    }
  }
  selectedCommonPrivilege(event: MatAutocompleteSelectedEvent): void {
    this.commonPrivileges.push(event.option.viewValue);
    this.commmonPrivilegeInput.nativeElement.value = '';
    this.commonPrivilegeCtrl.setValue(null);
  }
  selectedBrothersPrivilege(event: MatAutocompleteSelectedEvent): void {
    this.brothersPrivileges.push(event.option.viewValue);
    this.brothersPrivilegeInput.nativeElement.value = '';
    this.brothersPrivilegeCtrl.setValue(null);
  }

  private _filterPrivilege(value: string, allPrivileges: string[]): string[] {
    const filterValue = value.toLowerCase();
    return allPrivileges.filter((privilege) =>
      privilege.toLowerCase().includes(filterValue)
    );
  }

  onElderBtnClick() {
    this.isElder = !this.isElder;
  }
  onMinistryAssistantBtnClick() {
    this.isMinistryAssisstant = !this.isMinistryAssisstant;
  }

  managePublisher() {
    this.publisher = {
      lastName: this.publisherFormGroup.get('lastNameCtrl')?.value,
      firstName: this.publisherFormGroup.get('firstNameCtrl')?.value,
      hope: this.publisherFormGroup.get('hopeCtrl')?.value,
      birthdate: this.publisherFormGroup.get('birthdateCtrl')?.value,
      baptismDate: this.publisherFormGroup.get('baptismDateCtrl')?.value,
      gender: this.publisherFormGroup.get('genderCtrl')?.value,
      phoneNumber: this.publisherFormGroup.get('phoneNumberCtrl')?.value,
      emergencyContact: this.publisherFormGroup.get('emergencyContactCtrl')
        ?.value,
      adress: {
        country: this.publisherFormGroup.get('adressCtrlGroup.countryCtrl')
          ?.value,
        county: this.publisherFormGroup.get('adressCtrlGroup.countyCtrl')
          ?.value,
        zipCode: +this.publisherFormGroup.get('adressCtrlGroup.zipCodeCtrl')
          ?.value,
        city: this.publisherFormGroup.get('adressCtrlGroup.districtCtrl')
          ? this.publisherFormGroup.get('adressCtrlGroup.cityCtrl')?.value +
            ' ' +
            this.publisherFormGroup.get('adressCtrlGroup.districtCtrl')?.value
          : this.publisherFormGroup.get('adressCtrlGroup.cityCtrl')?.value,
        adressLine1: this.publisherFormGroup.get(
          'adressCtrlGroup.adressFirstLineCtrl'
        )?.value,
        adressLine2: this.publisherFormGroup.get(
          'adressCtrlGroup.adressSecondLineCtrl'
        )?.value,
      },
      elder: this.isElder,
      ministerialServant: this.isMinistryAssisstant,
      commonPrivileges: this.commonPrivileges,
      brotherPrivileges: this.brothersPrivileges,
    };
    return this.publisher;
  }

  onSubmit() {
    this.managePublisher();
    this.publService.addPublisher(this.publisher);
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
