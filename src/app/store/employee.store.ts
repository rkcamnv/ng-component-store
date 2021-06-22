import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from "../services/service.employee.service";

interface EmployeeState{
    origin:any[];
}

@Injectable({providedIn:'root'})
export class EmployeeStore extends ComponentStore<EmployeeState>{

    constructor(
        private employee: EmployeeService
    ){
        super({origin:[]});
        this.fetchEmployee$();
    }

    fetchEmployee$ = this.effect(
        trigger$ =>
        trigger$.pipe(
            switchMap(()=>this.employee.getEmployees()
            .pipe(
                tapResponse(response=>{
                console.log("🚀 ~ file: employee.store.ts ~ line 25 ~ EmployeeStore ~ response", response)
                    
                },console.error)
            ))
        )
    );
}