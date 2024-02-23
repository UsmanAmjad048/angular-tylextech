import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThebuttonComponent } from './thebutton.component';

describe('ThebuttonComponent', () => {
  let component: ThebuttonComponent;
  let fixture: ComponentFixture<ThebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
