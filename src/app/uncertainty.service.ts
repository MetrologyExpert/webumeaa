import { UncertaintyBudget } from './model/uncertaintyBudget.model';
import { Injectable } from '@angular/core';
import { Contribution } from './model/contribution.model';

@Injectable({
  providedIn: 'root'
})
export class UncertaintyService {

  constructor() { }


  private uncertaintyBudgetTable = new UncertaintyBudget('first measurement ',[
    new Contribution('Repeatability', 2, 13, 21, 17, 0),
    new Contribution('Reproducibility', 23, 1, 2, 0.5,5),
    new Contribution('Temperature', 2, 11, 2, 1, 2)

  ]);

  getUncertaintyBudgetTable(){
    return this.uncertaintyBudgetTable;
  }
  


}
