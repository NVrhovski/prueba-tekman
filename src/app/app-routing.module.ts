import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuarterDetailComponent } from './pages/quarter-detail/quarter-detail.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'quarter/:id', component: QuarterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
