import { Component, Input } from '@angular/core';
import { Tag } from '../../models/tag';
import { TagComponent } from './tag/tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [TagComponent, CommonModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent {
  @Input() tags: Tag[] = [];
  @Input() allowAdd: boolean = false;
}
