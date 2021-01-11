import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-instrumentpage',
  templateUrl: './instrumentpage.component.html',
  styleUrls: ['./instrumentpage.component.css']
})
export class InstrumentpageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private instrumentService:InstrumentService
  ) { }

  instrumentProfileForm: FormGroup;
  uncertaintyBudgetTableForm: FormGroup;
  contributionForm: FormGroup;


  
  
  ngOnInit(): void {
    let name = '';
    let imagePath = '';
    let description = '';
    let uncertaintyContributions = new FormArray([]);

    let measurementCase = '';
    let uncertaintyTable = new FormArray([]);
  
  this.instrumentProfileForm =
   new FormGroup({
        'name': new FormControl(name, Validators.required),
        'imagePath': new FormControl(imagePath, Validators.required),
        'description': new FormControl(description, Validators.required),
        'uncertaintyBudgets': uncertaintyTable
      });
  

      //Uncertainty Budget Table
      this.uncertaintyBudgetTableForm = new FormGroup({
        'measurementCase': new FormControl(measurementCase, Validators.required),
        'contributions': uncertaintyContributions
      })



     //Uncertainty Budget Table Form   
    this.contributionForm = new FormGroup({
     'title': new FormControl('', Validators.required),
     'errorValue': new FormControl('', Validators.required),
     'divisor': new FormControl('', Validators.required),
     'standardUncertainty': new FormControl('', Validators.required),
     'sensitivityCoefficient': new FormControl('', Validators.required),
     'stdUncertainty': new FormControl('', Validators.required),
    });


  }

  onSubmit(){
  }

  onCancel(){

    
  }


  addUncertaintyBudgetTable(){
    this.uncertaintyBudgets.push(this.uncertaintyBudgetTableForm);
  }

  get uncertaintyBudgets() {
    return (<FormArray>this.instrumentProfileForm.get('uncertaintyBudgets')).controls;
  }


  addContribution(){
    this.contributions.push(this.contributionForm)
  }

  get contributions() {
     return (<FormArray>this.uncertaintyBudgetTableForm.get('contributions')) ;
  }

}