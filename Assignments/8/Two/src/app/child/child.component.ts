import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  @Output() public MyEvent=new EventEmitter();
  @Input() public MessageFromParent="";

  ngOnInit(): void {
    
  }

  SendMessage()
  {
    this.MyEvent.emit("Hello From Child");
  }

}
