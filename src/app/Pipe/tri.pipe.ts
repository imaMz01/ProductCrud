import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/Product';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  transform(table: any[], column: string): Product[] {
    if (column=="") {
      return table;
    }
    return table.sort((a, b) => {
      console.log(column)
      console.log(a)
      if (typeof a[column] === 'number' && typeof b[column] === 'number') { 
        console.log(typeof a[column])
        return a[column] - b[column]; // Numerical comparison 
      } else { 
        // String comparison (case-insensitive) 
        console.log(typeof a[column])
        return a[column].localeCompare(b[column]);  
      } 
    })
  }

}
