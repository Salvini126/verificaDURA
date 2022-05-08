import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'salvini-booking';
  obsRoom : Observable <Room[]> = undefined!;
  data : Room[] = undefined!;
  
  constructor(private http : HttpClient){
    
  }
  ngOnInit(): void {
    this.obsRoom = this.http.get<Room[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-booking')
    this.obsRoom.subscribe(this.passaDati)
  }
  passaDati = (data: Room[]) => {
    this.data = data;
    console.log(data)
  }
  
}
