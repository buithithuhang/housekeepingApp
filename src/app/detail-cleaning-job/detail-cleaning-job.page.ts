import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cleaning-job',
  templateUrl: './detail-cleaning-job.page.html',
  styleUrls: ['./detail-cleaning-job.page.scss'],
})
export class DetailCleaningJobPage implements OnInit {
  form = [
    {name: 'Thay ga giường, vỏ gối', isChecked: false},
    {name: 'Quét mạng nhện', isChecked: false},
    {name: 'Lau bàn ghế', isChecked: false},
    {name: 'Lau sàn nhà', isChecked: false},
    // {name: 'Lau cửa chính, cửa sổ', isChecked: false},
    // {name: 'Bổ sung giấy vệ sinh ở phòng tắm (Nếu hết)', isChecked: false},
    // {name: 'Bổ sung kem đánh răng', isChecked: false},
    // {name: 'Lau sàn nhà', isChecked: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
