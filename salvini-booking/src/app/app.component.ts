import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'salvini-booking';
  obsRoom : Observable <object> = undefined!;
  data : object = undefined!;
  
  constructor(private http : HttpClient){
    
  }
  ngOnInit(): void {
    this.obsRoom = this.http.get<object>('https://my-json-server.typicode.com/malizia-g/hotel/short-booking')
    this.obsRoom.subscribe(this.passaDati)
  }
  passaDati = (data: object) => {
    this.data = data;
    console.log(data)
  }
  
}
