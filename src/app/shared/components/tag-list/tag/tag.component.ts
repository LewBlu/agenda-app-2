import { Component, Input } from '@angular/core';
import { Tag } from '../../../models/tag';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IssueService } from '../../../services/issue.service';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input() tag!: Tag;
  faXmark = faXmark;

  constructor(private issueService: IssueService){}

  removeTag(event: MouseEvent) {
    event.stopPropagation();
    this.issueService.removeTagFromIssue(this.tag.issue_id, this.tag.id);
  }
}
