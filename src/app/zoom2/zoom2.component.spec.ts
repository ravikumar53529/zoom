import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zoom2Component } from './zoom2.component';

describe('Zoom2Component', () => {
  let component: Zoom2Component;
  let fixture: ComponentFixture<Zoom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zoom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zoom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
