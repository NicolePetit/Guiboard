import { NgModule } from '@angular/core';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

const matModule = [MatButtonModule, MatToolbarModule,MatAutocompleteModule,MatChipsModule,MatNativeDateModule, MatRippleModule,MatDatepickerModule, MatCardModule, MatCommonModule, MatFormFieldModule,MatIconModule, MatInputModule, MatRadioModule]

@NgModule({
  declarations: [],
  imports: matModule,
  exports: matModule
})
export class MaterialModule {}
