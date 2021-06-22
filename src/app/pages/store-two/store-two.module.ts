import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreTwoRoutingModule } from './store-two-routing.module';
import { StoreTwoComponent } from './store-two.component';


@NgModule({
  declarations: [
    StoreTwoComponent
  ],
  imports: [
    CommonModule,
    StoreTwoRoutingModule
  ]
})
export class StoreTwoModule { }
