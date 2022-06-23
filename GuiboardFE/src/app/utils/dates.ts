import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtil {
  formatDate(date: Date) {
    if (date) {
      return date.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }else{
      return null
    }
  }
}
