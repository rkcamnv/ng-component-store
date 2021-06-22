import { Component, OnInit } from '@angular/core';
import { EmployeeStore } from 'src/app/store/employee.store';

@Component({
  selector: 'app-store-two',
  templateUrl: './store-two.component.html',
  styleUrls: ['./store-two.component.scss']
})
export class StoreTwoComponent implements OnInit {

  constructor(
    private store: EmployeeStore
  ) { }

  ngOnInit(): void {
  }

}
