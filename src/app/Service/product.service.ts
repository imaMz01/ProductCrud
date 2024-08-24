import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  constructor() { }
  i:number=1
  products:Product[]=[{id:this.i++,name:"USB",price:120,category:"Technologie",stock:12},
    {id:this.i++,name:"Adapter",price:60,category:"Technologie",stock:0},
    {id:this.i++,name:"Mouse",price:100,category:"Technologie",stock:10},
    {id:this.i++,name:"blue pen",price:120,category:"Education",stock:12},
    {id:this.i++,name:"Book",price:120,category:"Education",stock:0}
  ]
  getProducts(){
    return this.products
  }
  
  addProduct(product:Product){
    product.id=this.i
    this.products.push(product)
  }
}
