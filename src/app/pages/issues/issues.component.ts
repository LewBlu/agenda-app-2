import { Component, OnInit } from '@angular/core';
import { IssueTableComponent } from './issue-table/issue-table.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [IssueTableComponent],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent implements OnInit {

  issues: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('api/issue').subscribe(res => {
      this.issues = res;
    });
  }
}
