import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      `male`,
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/man-icon.svg')
    );
    iconRegistry.addSvgIcon(
      `female`,
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/woman-icon.svg')
    );
    iconRegistry.addSvgIcon(
      `sheep`,
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/sheep-icon.svg')
    );
    iconRegistry.addSvgIcon(
      `oint`,
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/crown-icon.svg')
    );
  }
}
