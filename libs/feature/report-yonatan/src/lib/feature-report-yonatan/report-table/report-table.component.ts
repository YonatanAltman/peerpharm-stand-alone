import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColDef} from "ag-grid-community";
import {AgGridModule} from "ag-grid-angular";

@Component({
  selector: 'peerpharm-stand-alone-report-table',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportTableComponent {

  @Input({required: true}) rowData!: any[] | null;
  @Input({required: true}) columnDefs!: ColDef[];
}
