import { Component, OnInit } from '@angular/core';
import { IssueTableComponent } from './issue-table/issue-table.component';
import { IssueService } from '../../shared/services/issue.service';
import { Issue } from '../../shared/models/issue';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [IssueTableComponent],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.issues$.subscribe((issues: Issue[] | undefined) => {
      this.issues = issues ?? [];
    });
    this.issueService.fetchIssues();
  }
}
