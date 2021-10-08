import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonTComponent } from './anon-t.component';

describe('AnonTComponent', () => {
  let component: AnonTComponent;
  let fixture: ComponentFixture<AnonTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
