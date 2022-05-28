import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherManagerComponent } from './publisher-manager/publisher-manager.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { MaterialModule } from 'src/shared/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherManagerComponent,
    PublisherDetailsComponent,
  ],
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [
    PublisherListComponent,
    PublisherManagerComponent,
    PublisherDetailsComponent,
  ],
})
export class PublisherModule {}
