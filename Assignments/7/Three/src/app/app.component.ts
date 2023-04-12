import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Three';

  textValue="Marvellous Infosystems";

  fun()
  {
    this.textValue= "Educating for Better tomorrow";
  }
}
