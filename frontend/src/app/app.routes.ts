
// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },

//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./features/auth/login/login').then(m => m.Login)
//   }
// ];
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.Login)
  },

  {
  path: 'dashboard',
  loadComponent: () =>
    import('./features/dashboard/dashboard/dashboard')
      .then(m => m.Dashboard)
},
{
  path: 'create-project',
  loadComponent: () =>
    import('./features/projects/create-project/create-project')
      .then(m => m.CreateProject)
},
{
  path: 'view-projects',
  loadComponent: () =>
    import('./features/projects/view-projects/view-projects')
      .then(m => m.ViewProjects)
},
{
  path: 'assign-task',
  loadComponent: () =>
    import('./features/tasks/assign-task/assign-task')
      .then(m => m.AssignTask)
},{
  path: 'view-tasks',
  loadComponent: () =>
    import('./features/tasks/view-tasks/view-tasks')
      .then(m => m.ViewTasks)
}
];