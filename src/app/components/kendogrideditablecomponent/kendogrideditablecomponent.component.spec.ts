import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendogrideditablecomponentComponent } from './kendogrideditablecomponent.component';

describe('KendogrideditablecomponentComponent', () => {
  let component: KendogrideditablecomponentComponent;
  let fixture: ComponentFixture<KendogrideditablecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KendogrideditablecomponentComponent]
    });
    fixture = TestBed.createComponent(KendogrideditablecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
