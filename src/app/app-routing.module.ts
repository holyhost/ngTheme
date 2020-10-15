import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { SettingComponent } from './pages/setting/setting.component';


const routes: Routes = [
  {
    path: '',
    component: Page1Component
  },
  {
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
