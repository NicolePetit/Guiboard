import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-publisher-manager',
  templateUrl: './publisher-manager.component.html',
  styleUrls: ['./publisher-manager.component.scss'],
})
export class PublisherManagerComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];

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
    "Service d'acceuil"
  ];
  publisher = new FormGroup({});
  lastName = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  birthdate = new FormControl('');
  commonPrivilegeCtrl = new FormControl('');
  brothersPrivilegeCtrl = new FormControl('');

  @ViewChild('commmonPrivilegeInput', { static: true })
  commmonPrivilegeInput: ElementRef<HTMLInputElement>;
  @ViewChild('brothersPrivilegeInput', { static: true })
  brothersPrivilegeInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredcommonPrivilege = this.commonPrivilegeCtrl.valueChanges.pipe(
      startWith(null),
      map((privilege: string | null) =>
        privilege
          ? this._filterPrivilege(privilege,this.allCommonPrivileges)
          : this.allCommonPrivileges.slice()
      )
    );
    this.filteredBrothersPrivilege = this.brothersPrivilegeCtrl.valueChanges.pipe(
        startWith(null),
        map((privilege: string | null) =>
          privilege
            ? this._filterPrivilege(privilege, this.allBrothersPrivileges)
            : this.allBrothersPrivileges.slice()
        )
      );
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

  private _filterPrivilege(value: string,allPrivileges:string[]): string[] {
    const filterValue = value.toLowerCase();
    return allPrivileges.filter((privilege) =>
      privilege.toLowerCase().includes(filterValue)
    );
  }

  onSubmit() {
    console.log('a submitté');
  }

  getErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.lastName.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {}
}
