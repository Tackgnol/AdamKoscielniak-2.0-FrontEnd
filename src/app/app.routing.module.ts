import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './modules/Login/components/login-form/login-form.component';
import { AdminComponent } from './modules/Admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  {path: 'admin', component: AdminComponent, can},
  { path: '', component: LoginFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
