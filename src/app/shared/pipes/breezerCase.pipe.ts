import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breezerCase'
})
export class BreezerCasePipe implements PipeTransform {

  transform(inputValue: string): any {
    
    let newValue: string = "";

    for(let char of inputValue){
      if(inputValue.indexOf(char) % 2 == 0){
        newValue += char.toUpperCase();
      }else{
        newValue += char.toLowerCase();
      }
    }

    return newValue;
  }
}
