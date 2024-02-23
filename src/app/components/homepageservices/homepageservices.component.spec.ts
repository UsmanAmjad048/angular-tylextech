import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageservicesComponent } from './homepageservices.component';

describe('HomepageservicesComponent', () => {
  let component: HomepageservicesComponent;
  let fixture: ComponentFixture<HomepageservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
