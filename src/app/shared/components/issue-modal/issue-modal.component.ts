import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Issue } from '../../models/issue';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-issue-modal',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './issue-modal.component.html',
  styleUrl: './issue-modal.component.css'
})
export class IssueModalComponent implements OnInit {
  issue!: Issue;
  constructor(private smartModal: NgxSmartModalService) {}

  ngOnInit(): void {
    this.issue = <Issue>this.smartModal.getModal('issueModal').getData();
  }
}
