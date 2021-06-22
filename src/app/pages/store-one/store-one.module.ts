import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreOneRoutingModule } from './store-one-routing.module';
import { StoreOneComponent } from './store-one.component';


@NgModule({
  declarations: [
    StoreOneComponent
  ],
  imports: [
    CommonModule,
    StoreOneRoutingModule
  ]
})
export class StoreOneModule { }
