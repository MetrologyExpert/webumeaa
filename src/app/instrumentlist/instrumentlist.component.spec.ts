import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentlistComponent } from './instrumentlist.component';

describe('InstrumentlistComponent', () => {
  let component: InstrumentlistComponent;
  let fixture: ComponentFixture<InstrumentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
