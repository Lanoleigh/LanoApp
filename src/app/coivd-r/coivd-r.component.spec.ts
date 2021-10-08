import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoivdRComponent } from './coivd-r.component';

describe('CoivdRComponent', () => {
  let component: CoivdRComponent;
  let fixture: ComponentFixture<CoivdRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoivdRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoivdRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
