import { Component, OnInit } from '@angular/core';
import { ProductService } from './Service/product.service';
import { Product } from './Model/Product';
import { TriPipe } from './Pipe/tri.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private pr:ProductService){}
  products:Product[]=[]
  name:string=""
  newProduct!:Product
  columnToSort:string=""
  ngOnInit(): void {
    this.products=this.pr.getProducts()
    console.log(this.products)
    this.newProduct={
      id:0,
      name:"",
      price:0,
      category:"",
      stock:0
    }
  }
 
  
  add(){
    console.log({id:0,name:this.newProduct.name,price:this.newProduct.price,category:this.newProduct.category,stock:this.newProduct.stock})
    this.pr.addProduct({id:0,name:this.newProduct.name,price:this.newProduct.price,category:this.newProduct.category,stock:this.newProduct.stock})
      this.newProduct={
        id:0,
        name:"",
        price:0,
        category:"",
        stock:0
      }
  }
  sort(column:string){
    this.columnToSort=column
  }
}
