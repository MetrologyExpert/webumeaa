import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-instrumentpage',
  templateUrl: './instrumentpage.component.html',
  styleUrls: ['./instrumentpage.component.css']
})
export class InstrumentpageComponent implements OnInit {

  constructor(
    private instrumentService:InstrumentService
  ) { }

  instrumentForm: FormGroup;

  ngOnInit(): void {

    let instrumentName = '';
    let instrumentImagePath = '';
    let instrumentDescription = '';

    this.instrumentForm = new FormGroup({
      'name': new FormControl(instrumentName, Validators.required),
      'imagePath': new FormControl(instrumentImagePath, Validators.required),
      'description': new FormControl(instrumentDescription, Validators.required),
    });
  }

  onSubmit(){
    this.instrumentService.addInstrument(this.instrumentForm.value);
  }

  onCancel(){}
}
