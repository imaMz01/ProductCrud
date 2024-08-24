import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() set appHighlight(stock:number) {
    this.changeColor(stock);
  }
  constructor(private el : ElementRef) { }
  
  changeColor(stock:number): void {
    if(stock>0){
      this.el.nativeElement.style.backgroundColor='rgb(127, 224, 151)'
    }else{
      this.el.nativeElement.style.backgroundColor='rgb(245, 148, 148)'
    }
    
  }
}
