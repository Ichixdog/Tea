import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longText'
})
export class LongTextPipe implements PipeTransform {

  transform(value: string, limit: number = 100): string {
    if (!value) return "";
    if (value.length < limit) return value

    const lastSpaceIndex = value.lastIndexOf(" ", limit)
    
    return value.substring(0, lastSpaceIndex) + "..."
  }

}
