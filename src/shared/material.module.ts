import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatCommonModule],
  exports: [MatButtonModule, MatCardModule, MatCommonModule],
})
export class MaterialModule {}
