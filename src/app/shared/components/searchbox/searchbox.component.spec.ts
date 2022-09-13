import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SanitizeUrlPipe } from '../../pipes/sanitize-url.pipe';

import { SearchboxComponent } from './searchbox.component';

describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchboxComponent],
      providers: [SanitizeUrlPipe, DomSanitizer],
      imports: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
