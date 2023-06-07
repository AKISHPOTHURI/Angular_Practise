import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() public parentData:any;

  @Output() public childEvent = new EventEmitter();
  public isDisable = true;
  public hasError = false;
  public isSpecial = true;
  public successClass = "text-success";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public greeting = "";

  public name = "";

  public display = true;

  public color = 'red';

  public animals = ['dog','cat','donkey','monkey']

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hello Akish')
  }

  onClick(event:any){
    console.log(event)
    this.greeting = "This event binding";
  }

  logMessage(value:any){
    console.log(value)
  }
  
  toggle(){
    this.display = !this.display;
  }
}
