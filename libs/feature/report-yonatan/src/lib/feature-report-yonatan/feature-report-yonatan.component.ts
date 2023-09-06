import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColDef} from "ag-grid-community";
import {AgGridModule} from "ag-grid-angular";
import {FeatureReportYonatanService} from "./feature-report-yonatan.service";
import {ReportTableComponent} from "./report-table/report-table.component";

@Component({
  selector: 'peerpharm-stand-alone-feature-report-yonatan',
  standalone: true,
  imports: [CommonModule, ReportTableComponent],
  templateUrl: './feature-report-yonatan.component.html',
  styleUrls: ['./feature-report-yonatan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureReportYonatanComponent {
  readonly title = 'Yonatan report';
  readonly featureReportYonatanService = inject(FeatureReportYonatanService);
  readonly data$ = this.featureReportYonatanService.getReport();
  readonly title1 = {
    sub: ''
  };

  get num(): number {
    console.count('num');
    return 4 * this.title.length;
  }

  columnDefs: ColDef[] = [
    {field: 'id'},
    {field: 'name'},
    {field: 'username'},
    {field: 'email'},
    {field: 'phone'},
    {field: 'website'}
  ];

}
