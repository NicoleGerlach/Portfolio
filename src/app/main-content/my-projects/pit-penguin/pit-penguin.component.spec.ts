import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitPenguinComponent } from './pit-penguin.component';

describe('PitPenguinComponent', () => {
  let component: PitPenguinComponent;
  let fixture: ComponentFixture<PitPenguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitPenguinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PitPenguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
