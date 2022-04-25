import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherManagerComponent } from './publisher-manager/publisher-manager.component';
import { PublisherItemComponent } from './publisher-item/publisher-item.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { MaterialModule } from 'src/shared/material.module';


@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherManagerComponent,
    PublisherItemComponent,
    PublisherDetailsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    PublisherListComponent,
    PublisherManagerComponent,
    PublisherItemComponent,
    PublisherDetailsComponent,
  ],
})
export class PublisherModule {}
