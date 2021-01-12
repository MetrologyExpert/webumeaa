import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncertainty-budget',
  templateUrl: './uncertainty-budget.component.html',
  styleUrls: ['./uncertainty-budget.component.css']
})
export class UncertaintyBudgetComponent  {



  constructor() { }

    rowForm = new FormGroup({
      title: new FormControl('title', Validators.required),
      errorValue: new FormControl('errorValue', Validators.required),
      divisor: new FormControl('divisor', Validators.required),
      standardUncertainty: new FormControl('standardUncertainty', Validators.required),
      sensitivityCoefficient: new FormControl('sensitivityCoefficient', Validators.required),
      stdUncertainty: new FormControl('stdUncertainty', Validators.required),
    });


    uncertaintyBudgetForm = new FormGroup({
      measurementCase: new FormControl('', Validators.required),
      contributions: new FormArray([this.rowForm])
    });
  
    contributions = this.uncertaintyBudgetForm.get('contributions') as FormArray;


  onSubmit(){
  }

  onCancel(){

  }

  addContribution(){
    this.contributions.push(this.rowForm);
  }
}
