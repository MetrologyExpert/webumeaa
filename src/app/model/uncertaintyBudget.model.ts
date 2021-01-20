import { FormArray } from '@angular/forms';
import { Contribution } from "./contribution.model";

export class UncertaintyBudget {

    public measurementCase: string;
    public contributions: Contribution[]

    constructor (measurementCase:string, contributions:Contribution[]){

        this.measurementCase = measurementCase;
        this.contributions = contributions;
    }

    get totalUncertainty() {
        let sum = 0;
        for (let c in this.contributions) { 
          sum += (this.contributions[c].stdUncertainty);
      }
      return sum;

    }
}