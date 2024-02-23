import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageheaderComponent } from './homepageheader.component';

describe('HomepageheaderComponent', () => {
  let component: HomepageheaderComponent;
  let fixture: ComponentFixture<HomepageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
