import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCleaningCheckPage } from './detail-cleaning-check.page';

describe('DetailCleaningCheckPage', () => {
  let component: DetailCleaningCheckPage;
  let fixture: ComponentFixture<DetailCleaningCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCleaningCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCleaningCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
