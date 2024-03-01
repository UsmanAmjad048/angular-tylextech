import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModrenApplicationDevelopmentComponent } from './modren-application-development.component';

describe('ModrenApplicationDevelopmentComponent', () => {
  let component: ModrenApplicationDevelopmentComponent;
  let fixture: ComponentFixture<ModrenApplicationDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModrenApplicationDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModrenApplicationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
