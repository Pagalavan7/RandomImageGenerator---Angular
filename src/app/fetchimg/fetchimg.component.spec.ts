import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchimgComponent } from './fetchimg.component';

describe('FetchimgComponent', () => {
  let component: FetchimgComponent;
  let fixture: ComponentFixture<FetchimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchimgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
