import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentContainerComponent } from 'src/app/shared/components/content-container/content-container.component';

import { PreparingDownloadComponent } from './preparing-download.component';

describe('PreparingDownloadComponent', () => {
  let component: PreparingDownloadComponent;
  let fixture: ComponentFixture<PreparingDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparingDownloadComponent, ContentContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
