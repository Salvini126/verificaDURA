import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  room: Room = undefined!;

  constructor() { }
  @Input() listaStanze : Room[] = undefined!;
  ngOnInit(): void {
  }
  dettagli(room : Room){
    this.room = room;
    console.log(room)
  }
  
}
