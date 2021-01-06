import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentpageComponent } from './instrumentpage.component';

describe('InstrumentpageComponent', () => {
  let component: InstrumentpageComponent;
  let fixture: ComponentFixture<InstrumentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
