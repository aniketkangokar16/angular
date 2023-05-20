import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
   constructor(private http:HttpClient) 
   { 

   }

   getAllBatches()
   {
    return this.http.get("http://localhost:5100/GetBatches");
   }
}
