import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
   @Output() public MyEvent=new EventEmitter();

   public Send()
   {
    this.MyEvent.emit("Hi Parent Component...")
   }

   @Input() public MessageFromParent="";

}
