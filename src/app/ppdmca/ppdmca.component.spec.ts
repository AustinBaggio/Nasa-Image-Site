import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpdmcaComponent } from './ppdmca.component';

describe('PpdmcaComponent', () => {
  let component: PpdmcaComponent;
  let fixture: ComponentFixture<PpdmcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpdmcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpdmcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
