import { Component, OnInit } from '@angular/core';
import { JobListService } from './job-list.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.page.html',
  styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {

  constructor(private jobListService: JobListService) { }
  hotels = [
    { id: 'Chưa dọn dẹp-0', name: 'Chưa dọn dẹp' },
    { id: 'Đang dọn dẹp-1', name: 'Đang dọn dẹp' },
    { id: 'Đã dọn dẹp-2', name: 'Đã dọn dẹp' }
  ];

  checkStatuses = [
    { id: 'Chưa kiểm tra-0', name: 'Chưa kiểm tra' },
    { id: 'Đang kiểm tra-1', name: 'Đang kiểm tra' },
    { id: 'Đã kiểm tra-2', name: 'Đã kiểm tra' }
  ];
  cleanStatuses = [
    { id: 'Chưa kiểm tra-0', name: 'Chưa kiểm tra' },
    { id: 'Đang kiểm tra-1', name: 'Đang kiểm tra' },
    { id: 'Đã kiểm tra-2', name: 'Đã kiểm tra' }
  ];
  roomStatuses = [
    { id: 'Phòng trống-0', name: 'Phòng trống' },
    { id: 'Khách trong phòng-1', name: 'Khách trong phòng' },
    { id: 'Khách ra ngoài-2', v: 'Khách ra ngoài' }
  ];

  floors = [
    { id: 'Tầng 1-0', name: 'Tầng 1' },
    { id: 'Tầng 2-1', name: 'Tầng 2' },
    { id: 'Tầng 3-2', name: 'Tầng 3' }
  ];
  rooms: any;
  customers: any;
  users: any;

  ngOnInit() {
    // get hotel
    this.jobListService.getHotel().subscribe((res: any) => {
      this.hotels = res.data;
    })
    // get floors 
    this.jobListService.getFloors().subscribe((res: any) => {
      this.floors = res.data;
    })

    // get room status

    this.jobListService.getRoomStatus().subscribe((res: any) => {
      this.roomStatuses = res.data;
    })
    // get clean status

    this.jobListService.getCleanStatus().subscribe((res: any) => {
      this.cleanStatuses = res.data;
    })

    // get check status
    this.jobListService.getCheckStatus().subscribe((res: any) => {
      this.checkStatuses = res.data;
    })

    // get rooms
    this.jobListService.getRoom().subscribe((res: any) => {
      this.rooms = res.data;
      console.log(this.rooms)
    })
    // get  Customer
    this.jobListService.getCustomer().subscribe((res: any) => {
      this.customers = res.data;
      console.log('customers' + this.customers)
    })
    // get users
    this.jobListService.getUsers().subscribe((res: any) => {
      this.users = res.data;
      console.log('customers' + this.customers)
    })
  }

}
