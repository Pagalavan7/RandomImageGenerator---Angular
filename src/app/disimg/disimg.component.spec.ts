import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisimgComponent } from './disimg.component';

describe('DisimgComponent', () => {
  let component: DisimgComponent;
  let fixture: ComponentFixture<DisimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisimgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
