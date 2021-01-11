import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelListPage } from './hotel-list.page';

describe('HotelListPage', () => {
  let component: HotelListPage;
  let fixture: ComponentFixture<HotelListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
