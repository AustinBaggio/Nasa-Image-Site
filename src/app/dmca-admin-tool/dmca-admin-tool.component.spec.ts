import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcaAdminToolComponent } from './dmca-admin-tool.component';

describe('DmcaAdminToolComponent', () => {
  let component: DmcaAdminToolComponent;
  let fixture: ComponentFixture<DmcaAdminToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmcaAdminToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmcaAdminToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
