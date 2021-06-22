import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeStore } from 'src/app/store/employee.store';

@Component({
  selector: 'app-store-one',
  templateUrl: './store-one.component.html',
  styleUrls: ['./store-one.component.scss']
})
export class StoreOneComponent implements OnInit,OnDestroy {

  constructor(
    // private store: EmployeeStore
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    // this.store.destroy$;
  }
}
