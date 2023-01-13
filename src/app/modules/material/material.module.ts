import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';


const Materials = [
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule,
  MatTabsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Materials,
  ],
  exports: [
    Materials
  ]
})
export class MaterialModule { }
