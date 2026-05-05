import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 👈 Add this
import { CommonModule } from '@angular/common';
import { Task } from '../../../core/services/task';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-tasks.html'
})
export class ViewTasks implements OnInit {
  tasks: any[] = [];

  constructor(
    private taskService: Task,
    private cdr: ChangeDetectorRef // 👈 Inject this
  ) {}

  ngOnInit() {
    this.taskService.getMyTasks().subscribe({
      next: (data: any) => {
        console.log("TASK DATA RECEIVED:", data);
        this.tasks = Array.isArray(data) ? data : [data];
        this.cdr.detectChanges(); // 👈 Force the UI to show the tasks
      },
      error: (err) => console.log(err)
    });
  }

  updateStatus(taskId: number, status: string) {
    this.taskService.updateStatus(taskId, status).subscribe({
      next: () => {
        alert('Status updated');
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}