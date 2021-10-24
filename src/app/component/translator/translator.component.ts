import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  constructor() { }
  public En : string = "d"
  public It : string = "d"

  ngOnInit(): void {
  }
  translateEn(){

    if(this.En=="d"){
        this.En= "a";
        this.It="d";
    }

  }

  translateIt(){

    if(this.It=="d"){
      this.It= "a";
      this.En="d"
  }
  
  }

}
