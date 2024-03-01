import { Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { AngularPracticeComponent } from "./components/angular-practice/angular-practice.component";
import {PageNotFoundComponent} from  "./components/page-not-found/page-not-found.component";
import { ModrenApplicationDevelopmentComponent } from "./components/modren-application-development/modren-application-development.component";
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupUpPageComponent } from  './components/signup-up-page/signup-up-page.component'  ;
import { TodoappComponent } from  './components/todoapp/todoapp.component'  ;
import { TaskDetailComponent } from  './components/task-detail/task-detail.component'  ;


import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'todoapp', component: TodoappComponent,canActivate: [AuthGuard]  },
  { path: 'item/:id', component: TaskDetailComponent,canActivate: [AuthGuard]  },
  { path: 'services/modern-application-development', component: ModrenApplicationDevelopmentComponent },
  { path: 'angular-test', component: AngularPracticeComponent },
  {path:"login", component:LoginPageComponent},
  {path:"signUp", component:SignupUpPageComponent},
  {path: '**', component: PageNotFoundComponent} ,
];