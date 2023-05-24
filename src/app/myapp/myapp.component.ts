import { Component ,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck{
  @Input()
  public property!: any; //component interaction parent to child
  // @Input ("property") public names:string | undefined; //another method
  @Input() public namess:any;
  @Input("property") public frn:any;
  @Input()public obj:any;
  
  text:string="how are you!!!"
  show:boolean=false; //for directives
  arr:string[]=["saravanan","ragul","vignesu"]
  // arr1:any[]=[{
  //   "id":1,
  //   "name":"saravanan",
  // },{
  //   "id":2,
  //   "name":"vignesu",

  // },{
  //   "id":3,
  //   "name":"ragul",

  // }]
  constructor(){
    console.log("inside constructor");
    
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngDocheck");
    
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngOnDestroy");
    
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterviewchecked");
    
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterContentInit");
    
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterContentChecked");
    
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfetrviewInit");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("inside onchanges");
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngoninit");
    
  }

  app_name:string="sarooo"
  is_Disabled:boolean=true

  onClick(e:any){
    this.app_name="broooo";
    this.is_Disabled=! this.is_Disabled; // this line makes true or false
    this.arr.push("itachi ");
    console.log(e);
    
  }
  tempref(e:any){
    console.log(e);
    

  }
// chils to parent
  @Output()public outtest=new EventEmitter()

  isclick(){
    this.outtest.emit("child to parent text")
  }




}

