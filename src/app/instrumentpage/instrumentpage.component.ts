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
  uncertaintyContributionForm: FormGroup;


  
  
  ngOnInit(): void {
    let name = '';
    let imagePath = '';
    let description = '';

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
              //Uncertainty Budget Table Form   
        'contributions': new FormArray([])
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
  }

 
}
