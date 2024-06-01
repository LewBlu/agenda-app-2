import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from '../models/issue';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issues$ = new BehaviorSubject<Issue[]|undefined>(undefined);
  constructor(private httpClient: HttpClient) { }

  fetchIssues() {
    this.httpClient.get<Issue[]>('api/issue').subscribe((res: Issue[]) => {
      this.issues$.next(res);
    });
  }
}
