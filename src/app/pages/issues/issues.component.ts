import { Component } from '@angular/core';
import { IssueTableComponent } from './issue-table/issue-table.component';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [IssueTableComponent],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent {

}
