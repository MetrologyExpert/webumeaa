import { FormArray } from '@angular/forms';
import { Contribution } from "./contribution.model";

export class UncertaintyBudget {

    public measurementCase: string;
    public contributions: Contribution[]

    constructor (measurementCase:string, contributions:Contribution[]){

        this.measurementCase = measurementCase;
        this.contributions = contributions;
    }

    

}