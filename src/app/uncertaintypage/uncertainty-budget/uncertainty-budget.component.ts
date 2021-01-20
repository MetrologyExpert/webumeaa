import { Subscription } from 'rxjs';
import { Contribution } from './../../model/contribution.model';
import { UncertaintyBudget } from './../../model/uncertaintyBudget.model';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { UncertaintyService } from 'src/app/uncertainty.service';
import { ActivatedRoute, Params } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-uncertainty-budget',
  templateUrl: './uncertainty-budget.component.html',
  styleUrls: ['./uncertainty-budget.component.css']
})
export class UncertaintyBudgetComponent implements OnInit {

  id:number = 0;
  contribution: Contribution[];
  isTouched = false;
  editMode = false;


  constructor( 
    private route: ActivatedRoute,
    private uncertaintyService: UncertaintyService) { }

  ngOnInit(): void {
       this.initForm();
      }
    
  ubTable = this.uncertaintyService.getUncertaintyBudgetTable();

  private initForm(){  

    //to display contribution data  
    let contributionRow = this.uncertaintyBudgetForm.get('contributions') as FormArray;
      for( let c of this.ubTable.contributions){
        //assign an Id number
        c.id = this.id++;
        console.log(c.id);
        //pushed controls with prefilled data        
        contributionRow.push(
          new FormGroup({
            title: new FormControl(c.title, [Validators.required]),
            errorValue: new FormControl(c.errorValue, Validators.required),
            divisor: new FormControl( c.divisor, Validators.required),
            standardUncertainty: new FormControl( c.standardUncertainty, Validators.required),
            sensitivityCoefficient: new FormControl( c.sensitivityCoefficient, Validators.required),
            stdUncertainty: new FormControl(c.stdUncertainty, Validators.required),
          })          
        );
      }

      //display rest of the form
      //display description of the case
    let measurementCase =  this.ubTable.measurementCase;
    this.uncertaintyBudgetForm = new FormGroup({
      measurementCase: new FormControl(measurementCase, Validators.required),
      contributions: contributionRow,
      //calculated total uncertainty
      totalUncertainty: new FormControl(this.ubTable.totalUncertainty, Validators.required)
    });   
  }
  //from the table select row to be updated
   onSelected(id:number){
    console.log(id);
    console.log(this.ubTable);
  }

  //Event binding case 
  // touched(event:any){
  //      console.log(event.target.value)
  // }
  //in HTML teplate add to input control <!-- (input)="touched($event)" -->


  onCancel(){}
 
  //Submitting uncertainty budget to an Instrument page
  onSubmit(){
    console.log(this.ubTable.contributions);
  }
  
  //Add contribution row controls to the uncertainty budget
  //define blank row
  rowForm = 
  new FormGroup({
    title: new FormControl(null, Validators.required),
    errorValue: new FormControl(null, Validators.required),
    divisor: new FormControl( null, Validators.required),
    standardUncertainty: new FormControl( null, Validators.required),
    sensitivityCoefficient: new FormControl( null, Validators.required),
    stdUncertainty: new FormControl( null, Validators.required)
  })

  //this bit we need to show the path 
  uncertaintyBudgetForm = new FormGroup({
    measurementCase: new FormControl('', Validators.required),
    contributions: new FormArray([]),
    totalUncertainty: new FormControl('',Validators.required)
  });

  //path to contributions
  contributionsControls = <FormArray>this.uncertaintyBudgetForm.get('contributions');
  
  //add contributions
  addContribution(){
    this.contributionsControls.push(this.rowForm);
    console.log(this.ubTable);


  }
}