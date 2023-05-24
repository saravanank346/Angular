import { Component, ViewChild ,AfterViewInit } from '@angular/core';
import { MyappComponent } from './myapp/myapp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = ' saravanan new_project';
  name="vignesu";
  frnd="arun"
  arr1=[{
    "id":1,
    "name":"saravanan",
    "dob":"24/01/2001",

  },{
    "id":2,
    "name":"ragul",
    "dob":"23/01/1890",

  },
  {
    "id":3,
    "name":"vignesuu",
    "dob":"23/12/1455",
  }
]
message=""
// 
// messagefromchild(e:any){
//   console.log(e);
  

// }

@ViewChild(MyappComponent)mychild :any;
 
ngAfterViewInit(): void {
  // throw new Error('Method not implemented.');
  this.message=this.mychild.app_name;
  
  
  
  
}


}
