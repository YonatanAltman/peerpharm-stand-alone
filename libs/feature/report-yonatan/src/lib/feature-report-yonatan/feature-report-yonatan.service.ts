import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportUser} from "./feature-report-yonatan.interface";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeatureReportYonatanService {

  readonly http = inject(HttpClient);


  getReport(): Observable<ReportUser[]> {
    return this.http.get<ReportUser[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap(()=>console.log('here'))
    );
  }
}
