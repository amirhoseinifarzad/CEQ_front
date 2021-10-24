import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-nav-heder',
  templateUrl: './nav-heder.component.html',
  styleUrls: ['./nav-heder.component.css']
})
export class NavHederComponent implements OnInit {

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
