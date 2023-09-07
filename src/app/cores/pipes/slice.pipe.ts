import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe',
  pure: false
})
export class SlicePipe implements PipeTransform {

  transform(value: any[], count: number): any[] {
    if (count == 0) return value
    return value.slice(count, count + 1);
  }

}
