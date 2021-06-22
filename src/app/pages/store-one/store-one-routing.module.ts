import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreOneComponent } from './store-one.component';

const routes: Routes = [{ path: '', component: StoreOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreOneRoutingModule { }
