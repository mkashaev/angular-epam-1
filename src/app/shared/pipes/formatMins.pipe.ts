import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMins' })
export class FormatMins implements PipeTransform {
  transform(minutes: number): string {
    if (!minutes || minutes < 0) {
      return '00:00';
    }

    const m = minutes % 60;
    const h = (minutes - m) / 60;

    return (
      (h < 10 ? '0' : '') +
      h.toString() +
      ':' +
      (m < 10 ? '0' : '') +
      m.toString()
    );
  }
}
