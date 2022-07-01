import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPnrComponent } from './search-by-pnr.component';

describe('SearchByPnrComponent', () => {
  let component: SearchByPnrComponent;
  let fixture: ComponentFixture<SearchByPnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByPnrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByPnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
