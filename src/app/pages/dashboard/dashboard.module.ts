import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class DashbordModule { }
