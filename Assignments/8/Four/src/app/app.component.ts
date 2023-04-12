import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Four';
  public lengthOfString="";

  CalculateLength(value:any)
  {
     this.lengthOfString=value.target.value.length;
  }
}
