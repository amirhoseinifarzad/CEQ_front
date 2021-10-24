import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  

  @Output() colors: EventEmitter<any> = new EventEmitter();
  public color : string = "y" ;


  constructor() {}

  ngOnInit(): void {


  }

  shapeColorO(){
    this.color = "o" ;
    this.colors.emit(this.color);

  }

  shapeColorW(){
    this.color = "w" ;
    this.colors.emit(this.color);


  }

  shapeColorB(){
    this.color = "b" ;
   this.colors.emit(this.color);


  }

  shapeColory(){
    this.color = "y" ;
    this.colors.emit(this.color);
  }

}