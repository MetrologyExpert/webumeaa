import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Instrument } from './model/instrument.model';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  instrumentChanges = new Subject<Instrument[]>();

  private instruments: Instrument[];
    //,[
      //new Ingredient('Meat',1),
      //new Ingredient('French Fies', 20)
    


  constructor() { }

  addInstrument(instrument:Instrument){
    this.instruments.push(instrument);
    this.instrumentChanges.next(this.instruments.slice());
  }

  getInstruments(){
    return this.instruments.slice();
  }
}
