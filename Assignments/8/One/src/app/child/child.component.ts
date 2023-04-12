import { Component , EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{

  @Output() public MyEvent=new EventEmitter();
  public inputText="";
  
  ngOnInit(): void {
    
  }

  SendMessage()
  {
      this.MyEvent.emit(this.inputText);
  }

}