import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SanitizeUrlPipe } from './sanitize-url.pipe';

describe('SanitizeUrlPipe', () => {
  /* Dependency declaration */
  TestBed.configureTestingModule({
    providers: [SanitizeUrlPipe, DomSanitizer],
    declarations: [SanitizeUrlPipe]
  });

  it('create an instance', () => {
    let sanitizer = TestBed.inject(DomSanitizer);
    let pipe = new SanitizeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
