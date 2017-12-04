import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNasaComponent } from './search-nasa.component';

describe('SearchNasaComponent', () => {
  let component: SearchNasaComponent;
  let fixture: ComponentFixture<SearchNasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
