import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.page.html',
  styleUrls: ['./room-list.page.scss'],
})
export class RoomListPage implements OnInit {

  constructor() { }
  
  rooms = [1, 2, 3, 4, 5];
  ngOnInit() {
  }

}
