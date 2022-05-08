import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking.model';
import { Room } from './room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'salvini-booking';
  obsRoom : Observable <Room[]> = undefined!;
  obsBooking : Observable <Booking[]> = undefined!;
  data : Room[] = undefined!;
  dataz : Booking[] = undefined!;
  
  constructor(private http : HttpClient){
    
  }
  ngOnInit(): void {
    this.obsRoom = this.http.get<Room[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-booking')
    this.obsBooking = this.http.get<Booking[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking')
    this.obsRoom.subscribe(this.passaDati)
    this.obsBooking.subscribe(this.passaDatiz)
  }
  passaDati = (data: Room[]) => {
    this.data = data;
    
    console.log(data)
  }
  passaDatiz = (dataz: Booking[]) => {
    this.dataz = dataz;
    
    console.log(dataz)
  }
  
}
