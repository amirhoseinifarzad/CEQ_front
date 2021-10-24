import { Component,DoCheck,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CyberE';
  color : string = "y" ;
constructor(
  private act :ActivatedRoute ,

){}


  ngOnInit(){

  $(document).ready(function() {

    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

});



}



colors(color :string){
 this.color = color
}


}

