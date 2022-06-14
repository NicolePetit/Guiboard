import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})export class DateUtil {
 formatDate(date: Date) {
    return date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

}
