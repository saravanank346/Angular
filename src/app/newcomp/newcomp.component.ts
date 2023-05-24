import { Component } from '@angular/core';

@Component({
  selector: '.app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.scss']
})
export class NewcompComponent {
  name:string="saravanan";
  num:number=0;

  pressed(e:any){
    
    console.log(e);
    this.num+=1;

    
  }


}
