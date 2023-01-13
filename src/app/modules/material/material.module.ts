import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
const Materials = [
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatSlideToggleModule,
    Materials,
  ],
  exports: [
    Materials
  ]
})
export class MaterialModule { }
