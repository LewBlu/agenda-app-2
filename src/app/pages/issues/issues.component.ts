import { Component, OnDestroy, OnInit } from '@angular/core';
import { IssueTableComponent } from './issue-table/issue-table.component';
import { IssueService } from '../../shared/services/issue.service';
import { Issue } from '../../shared/models/issue';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [IssueTableComponent],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent implements OnInit, OnDestroy {
  issues: Issue[] = [];
  ngUnsubscribe = new Subject<void>();
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.issues$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((issues: Issue[] | undefined) => {
      this.issues = issues ?? [];
    });
    this.issueService.fetchIssues();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
