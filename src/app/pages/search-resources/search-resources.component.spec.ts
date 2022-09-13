import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResourcesComponent } from './search-resources.component';

describe('SearchResourcesComponent', () => {
  let component: SearchResourcesComponent;
  let fixture: ComponentFixture<SearchResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
