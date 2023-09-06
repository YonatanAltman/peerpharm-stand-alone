import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureReportYonatanComponent } from './feature-report-yonatan.component';

describe('FeatureReportYonatanComponent', () => {
  let component: FeatureReportYonatanComponent;
  let fixture: ComponentFixture<FeatureReportYonatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureReportYonatanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureReportYonatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
