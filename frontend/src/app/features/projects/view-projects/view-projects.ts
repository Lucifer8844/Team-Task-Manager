import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 👈 Add ChangeDetectorRef here
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/services/project';

@Component({
  selector: 'app-view-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-projects.html'
})
export class ViewProjects implements OnInit {
  projects: any[] = [];

  constructor(
    private projectService: Project,
    private cdr: ChangeDetectorRef // 👈 Inject it here
  ) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (data: any) => {
        console.log("PROJECT DATA RECEIVED:", data);
        this.projects = data;
        this.cdr.detectChanges(); // 👈 FORCE the UI to update NOW
      },
      error: (err) => console.error("FETCH ERROR:", err)
    });
  }
}