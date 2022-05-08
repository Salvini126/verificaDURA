import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor() { }
  @Input() listaStanze : Room[] = undefined!;
  ngOnInit(): void {
  }

}
