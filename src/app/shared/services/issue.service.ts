import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from '../models/issue';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issues$ = new BehaviorSubject<Issue[]>([]);
  constructor(private httpClient: HttpClient) { }
  
  fetchIssues() {
    this.httpClient.get<Issue[]>('api/issue').subscribe((res: Issue[]) => {
      this.issues$.next(res);
    });
  }

  updateLocalIssue(issue_id: number, updatedDetails: {}) {
    const issues = this.issues$.value;
    const updatedIssues = issues?.map(issue => {
      if(issue.id != issue_id) {
        return issue;
      }
      let updatedIssue: Issue = {...issue, ...updatedDetails};
      return updatedIssue;
    });

    this.issues$.next(updatedIssues);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    TAGS                                    */
  /* -------------------------------------------------------------------------- */

  removeTagFromIssue(issue_id: number, tag_id: number) {
    const issues = this.issues$.value;
    let selectedIssue = issues.filter(issue => issue.id == issue_id)[0];
    selectedIssue.tags = selectedIssue.tags?.filter(tag => tag.id != tag_id);

    this.httpClient.delete(`api/tag/${tag_id}`).subscribe();
  }
}
