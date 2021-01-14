import { Contribution } from './../../model/contribution.model';
import { UncertaintyBudget } from './../../model/uncertaintyBudget.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UncertaintyService } from 'src/app/uncertainty.service';

@Component({
  selector: 'app-uncertainty-budget',
  templateUrl: './uncertainty-budget.component.html',
  styleUrls: ['./uncertainty-budget.component.css']
})
export class UncertaintyBudgetComponent implements OnInit {
 

  constructor( private uncertaintyService: UncertaintyService) { }

  ngOnInit(): void {
    this.initForm();

  }

  ubTable = this.uncertaintyService.getUncertaintyBudgetTable();

  private initForm(){
    let measurementCase =  this.ubTable.measurementCase;
    let contributionRow = this.uncertaintyBudgetForm.get('contributions') as FormArray;
    
      for( let c of this.ubTable.contributions){
        contributionRow.push(
          new FormGroup({
            title: new FormControl(c.title, Validators.required),
            errorValue: new FormControl(c.errorValue, Validators.required),
            divisor: new FormControl( c.divisor, Validators.required),
            standardUncertainty: new FormControl( c.standardUncertainty, Validators.required),
            sensitivityCoefficient: new FormControl( c.sensitivityCoefficient, Validators.required),
            stdUncertainty: new FormControl( c.standardUncertainty * c.sensitivityCoefficient, Validators.required)
          })
        );
      }
    
    this.uncertaintyBudgetForm = new FormGroup({
      measurementCase: new FormControl(measurementCase, Validators.required),
      contributions: contributionRow
    });   

  }

 
  onSubmit(){
  }

  onCancel(){

  }

  rowForm = 
  new FormGroup({
    title: new FormControl(null, Validators.required),
    errorValue: new FormControl(null, Validators.required),
    divisor: new FormControl( null, Validators.required),
    standardUncertainty: new FormControl( null, Validators.required),
    sensitivityCoefficient: new FormControl( null, Validators.required),
    stdUncertainty: new FormControl( null, Validators.required)
  })


  uncertaintyBudgetForm = new FormGroup({
    measurementCase: new FormControl('', Validators.required),
    contributions: new FormArray([])
  });

  contributionsControls = <FormArray>this.uncertaintyBudgetForm.get('contributions');

  addContribution(){
    this.contributionsControls.push(this.rowForm);
  }
}