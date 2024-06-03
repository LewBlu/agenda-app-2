import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { IssueModalComponent } from '../../../shared/components/issue-modal/issue-modal.component';
import { TagListComponent } from '../../../shared/components/tag-list/tag-list.component';

@Component({
  selector: 'app-issue-table',
  standalone: true,
  imports: [CommonModule, TagListComponent],
  templateUrl: './issue-table.component.html',
  styleUrl: './issue-table.component.css'
})
export class IssueTableComponent implements OnInit {

  @Input() issues: any;

  constructor(private smartModal: NgxSmartModalService, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.smartModal.create('issueModal', IssueModalComponent, this.vcr);
  }

  openIssueModal() {
    this.smartModal.getModal('issueModal').open();
  }
}
