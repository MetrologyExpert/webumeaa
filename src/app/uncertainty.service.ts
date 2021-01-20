import { UncertaintyBudget } from './model/uncertaintyBudget.model';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';

import { Contribution } from 'src/app/model/contribution.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UncertaintyService {

  id:number;
  ubTableChanged = new Subject<Contribution[]>()

  constructor() { }


  private uncertaintyBudgetTable = new UncertaintyBudget(
    'first measurement ', [
    new Contribution('Measurement', 1,1,1,1,1), // {title:'Repeatability', errorValue: 2, divisor: 13, standardUncertainty: 21, sensitivityCoefficient:17, stdUncertainty:9},
    new Contribution('Reproducibility', 23, 1, 2, 0.5,9),
    new Contribution('Temperature', 2, 11, 2, 1, 2)]);

   getUncertaintyBudgetTable$():Observable<UncertaintyBudget>{
     return of(this.uncertaintyBudgetTable);
   }
  
   getUncertaintyBudgetTable():UncertaintyBudget{
     return this.uncertaintyBudgetTable;
   }
  
   getContribution(index:number){
    return this.uncertaintyBudgetTable['contributions'][index];
  }

//   getContribution(id:number){
//   return this.getUncertaintyBudgetTable['contribution'].find(c => c.id === id);
// }

  addNewContribution(contribution: Contribution){
    this.uncertaintyBudgetTable['contributions'].push(contribution);
  }

  updateContribution(index: number, newContribution: Contribution){
    this.uncertaintyBudgetTable['contributions'][index] = newContribution; 
    this.ubTableChanged.next(this.uncertaintyBudgetTable['contributions']);

  }



}
