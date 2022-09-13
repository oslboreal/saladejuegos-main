import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {

  constructor(protected _sanitizer: DomSanitizer) {
  }

  transform(value: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
