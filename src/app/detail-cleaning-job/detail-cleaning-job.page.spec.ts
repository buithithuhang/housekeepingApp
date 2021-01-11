import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCleaningJobPage } from './detail-cleaning-job.page';

describe('DetailCleaningJobPage', () => {
  let component: DetailCleaningJobPage;
  let fixture: ComponentFixture<DetailCleaningJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCleaningJobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCleaningJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
