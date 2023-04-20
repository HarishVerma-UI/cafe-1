import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './body/center/center.component';
import { TableComponent } from './pages/table/table.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CenterComponent },
  { path:'table',component:TableComponent},
  { path: 'alerts',component:AlertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
