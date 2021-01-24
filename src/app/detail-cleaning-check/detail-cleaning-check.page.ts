import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cleaning-check',
  templateUrl: './detail-cleaning-check.page.html',
  styleUrls: ['./detail-cleaning-check.page.scss'],
})
export class DetailCleaningCheckPage implements OnInit {
  form = [
    {name: 'Kiểm tra sàn nhà', isChecked: false},
    {name: 'Kiểm tra ga giường, vỏ gối', isChecked: false},
    {name: 'Kiểm tra bàn ghế', isChecked: false},
    {name: 'Kiểm tra đồ dùng trong phòng', isChecked: false},
    {name: 'Kiểm tra nhà vệ sinh', isChecked: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
