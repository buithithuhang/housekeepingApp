import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CleanListPage } from './clean-list.page';

describe('CleanListPage', () => {
  let component: CleanListPage;
  let fixture: ComponentFixture<CleanListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CleanListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
