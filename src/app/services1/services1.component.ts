import { Component } from '@angular/core';
import { detials } from 'src/services';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.scss']
})
export class Services1Component {
  s=new detials()

}
