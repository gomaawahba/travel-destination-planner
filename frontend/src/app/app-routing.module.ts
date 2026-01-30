import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserPanelComponent } from './user/user-panel/user-panel.component';
import { SearchComponent } from './user/search/search.component';
import { BulkDestinationsComponent } from './admin/bulk-destinations/bulk-destinations.component';
import { AllDestinationsComponent } from './admin/all-destinations/all-destinations.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'user-dashboard', component: UserPanelComponent },
  { path: 'search', component: SearchComponent },
   { path: 'all-destinations', component: AllDestinationsComponent },
    { path: 'bulk-destinations', component: BulkDestinationsComponent },
  { path: '**', redirectTo: '/login' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
