import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSSComponent } from './load-ss.component';

describe('LoadSSComponent', () => {
  let component: LoadSSComponent;
  let fixture: ComponentFixture<LoadSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
