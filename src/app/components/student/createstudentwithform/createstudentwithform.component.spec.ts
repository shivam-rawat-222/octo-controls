import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestudentwithformComponent } from './createstudentwithform.component';

describe('CreatestudentwithformComponent', () => {
  let component: CreatestudentwithformComponent;
  let fixture: ComponentFixture<CreatestudentwithformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatestudentwithformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatestudentwithformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
