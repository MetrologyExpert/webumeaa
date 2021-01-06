import { InstrumentService } from '../instrument.service';
import { Component, OnInit } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-instrumentlist',
  templateUrl: './instrumentlist.component.html',
  styleUrls: ['./instrumentlist.component.css']
})
export class InstrumentlistComponent implements OnInit {
  instruments: Instrument[];
  subscription: Subscription;

  constructor( private  instrumentService: InstrumentService) { }

  ngOnInit(): void {
    this.subscription = this.instrumentService.instrumentChanges.subscribe((instruments: Instrument[]) => { 
      this.instruments = instruments;
         } 
      );
      this.instruments = this.instrumentService.getInstruments();
  }

}
