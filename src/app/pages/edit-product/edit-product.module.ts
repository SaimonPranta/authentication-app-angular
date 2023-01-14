import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { EditProductComponent } from './edit-product.component';


@NgModule({
  declarations: [
    EditProductComponent
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class EditProductModule { }
