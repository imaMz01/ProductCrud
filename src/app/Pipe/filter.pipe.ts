import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/Product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(table:Product[],name:string): Product[] {
    if(name==""){
      return table
    }else{
      return table.filter(elmt=>elmt.name.toLowerCase().includes(name.toLowerCase())) 
    }
   
  }

}
