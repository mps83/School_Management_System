import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accountSelector',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './registeration/registeration.module#RegisterationPageModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'registeration', loadChildren: './registeration/registeration.module#RegisterationPageModule' },
  {
    path: 'class',
    loadChildren: './class/class.module#ClassPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'accountSelector',
    loadChildren: './account-selector/account-selector.module#AccountSelectorPageModule'
  },
  { path: 'parentSection', loadChildren: './parent-section/parent-section.module#ParentSectionPageModule' },
  {
    path: 'parentHome',
    loadChildren: './parent-home/parent-home.module#ParentHomePageModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
