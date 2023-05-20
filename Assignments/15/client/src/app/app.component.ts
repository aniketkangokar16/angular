import { Component,OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  dataFromService:any;
  displayData:any;
  constructor(private service:MarvellousService)
  {

  }

  ngOnInit()
  {
  this.service.getAllBatches().subscribe(data=>{
  this.dataFromService=data;
  })
  }

 public GetData() 
  {
    this.displayData=this.dataFromService;
   
  }
  
}

