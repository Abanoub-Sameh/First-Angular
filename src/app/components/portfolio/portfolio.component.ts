import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent {
  

  imgPort:string='';
  details(src:string):void{
    this.imgPort=src;    
    console.log(this.imgPort);

  }


}
