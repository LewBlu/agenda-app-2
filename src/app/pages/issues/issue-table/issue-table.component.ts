import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { IssueModalComponent } from '../../../shared/components/issue-modal/issue-modal.component';
import { TagListComponent } from '../../../shared/components/tag-list/tag-list.component';
import { Issue } from '../../../shared/models/issue';

@Component({
  selector: 'app-issue-table',
  standalone: true,
  imports: [CommonModule, TagListComponent],
  templateUrl: './issue-table.component.html',
  styleUrl: './issue-table.component.css'
})
export class IssueTableComponent implements OnInit {

  @Input() issues: Issue[] = [];

  constructor(private smartModal: NgxSmartModalService, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.smartModal.create('issueModal', IssueModalComponent, this.vcr);
  }

  openIssueModal(issue: Issue) {
    let modal = this.smartModal.getModal('issueModal');
    modal.setData(issue);
    this.smartModal.getModal('issueModal').open();
  }
}
