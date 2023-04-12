import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Four';
  textValue="Marvellous Infosystems";

  public funUpper()
  {
    this.textValue= this.textValue.toUpperCase();
  }

  public funLower()
  {
    this.textValue= this.textValue.toLowerCase();
  }
}
