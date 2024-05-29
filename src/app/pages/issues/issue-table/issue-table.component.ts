import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-issue-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './issue-table.component.html',
  styleUrl: './issue-table.component.css'
})
export class IssueTableComponent {

  @Input() issues: any;
}
