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
  editP:boolean=false
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
  edit(product:Product){
    this.editP=true
    this.newProduct={
      id:product.id,
      name:product.name,
      price:product.price,
      category:product.category,
      stock:product.stock
    }
  }
  update(){
    this.products.filter(product=>{
      if(product.id == this.newProduct.id){
        product.category=this.newProduct.category
        product.name=this.newProduct.name
        product.stock=this.newProduct.stock
        product.price=this.newProduct.price
        console.log(product)
        this.newProduct={
          id:0,
          name:"",
          price:0,
          category:"",
          stock:0
        }
      }
    })
    this.editP=false
  }
  delete(id:number){
    let index=this.products.findIndex(product=>product.id===id)
    if(index!=-1){
      this.products.splice(index,1)
    }
  }
}
