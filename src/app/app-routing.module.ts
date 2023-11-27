
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MOHsReqComponent } from './mo-hs-req/mo-hs-req.component';
import { HourFormComponent } from './forms/hourForm.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './shared/services/auth.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewListComponent } from './forms/new-list/new-list.component';

@NgModule({
  imports: [CommonModule]
})
export class RoutingModule{}
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'mo-hs-req', component: MOHsReqComponent},
  { path: 'hourForm', component: HourFormComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'new-list', component: NewListComponent},
  { path: 'lists/:listId', component: HourFormComponent}


];

export const AppRoutingModule = RouterModule.forRoot(routes);
