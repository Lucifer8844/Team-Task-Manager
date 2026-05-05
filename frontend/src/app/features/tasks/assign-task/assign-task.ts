import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../core/services/task';

@Component({
  selector: 'app-assign-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './assign-task.html'
})
export class AssignTask {

  title = '';
  status = '';
  dueDate = '';
  projectId = '';
  userId = '';

  constructor(private taskService: Task) {}

  assign() {

    const payload = {
      title: this.title,
      status: this.status,
      dueDate: this.dueDate,
      project: { id: Number(this.projectId) },
      assignee: { id: Number(this.userId) }
    };

    console.log("SENDING:", payload);

    this.taskService.assignTask(payload).subscribe({
      next: () => {
        alert('Task assigned successfully');
      },
      error: (err) => {
        console.log(err);
        alert('Error assigning task');
      }
    });
  }
}