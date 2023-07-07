import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poolSearch'
})
export class PoolSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
