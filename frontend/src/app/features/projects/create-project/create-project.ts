// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-project',
//   imports: [],
//   templateUrl: './create-project.html',
//   styleUrl: './create-project.css',
// })
// export class CreateProject {}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../../core/services/project';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-project.html'
})
export class CreateProject {

  name = '';
  description = '';

  constructor(private projectService: Project) {}

  create() {
  console.log("CLICK WORKING");  // add this

  this.projectService.createProject({
    name: this.name,
    description: this.description
  }).subscribe({
    next: () => {
      alert('Project created successfully');
    },
    error: (err) => {
      console.log(err);   // VERY IMPORTANT
      alert('Error creating project');
    }
  });
} 
}