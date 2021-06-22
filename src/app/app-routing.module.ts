import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/store-one' },
  { path: 'store-one', loadChildren: () => import('./pages/store-one/store-one.module').then(m => m.StoreOneModule) },
  { path: 'store-two', loadChildren: () => import('./pages/store-two/store-two.module').then(m => m.StoreTwoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
