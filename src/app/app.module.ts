import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentlistComponent } from './instrumentlist/instrumentlist.component';
import { InstrumentpageComponent } from './instrumentpage/instrumentpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InstrumentsComponent } from './instruments/instruments.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UncertaintyBudgetComponent } from './uncertaintypage/uncertainty-budget/uncertainty-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentlistComponent,
    InstrumentpageComponent,
    InstrumentsComponent,
    NavbarComponent,
    UncertaintyBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
