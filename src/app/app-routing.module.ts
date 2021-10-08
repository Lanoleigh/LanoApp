import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'landing-page', component: LandingPageComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'general-info', loadChildren: () => import('./general-info/general-info.module').then(m => m.GeneralInfoModule) },
      { path: 'load-ss', loadChildren: () => import('./load-ss/load-ss.module').then(m => m.LoadSSModule) },
      { path: 'covid-r', loadChildren: () => import('./coivd-r/covid-r.module').then(m => m.CovidRModule) },
      { path: 'protect', loadChildren: () => import('./protect/protect.module').then(m => m.ProtectModule) },
      { path: 'anon-t', loadChildren: () => import('./anon-t/anon-t.module').then(m => m.AnonTModule) },
      { path: 'app-a', loadChildren: () => import('./app-a/app-a.module').then(m => m.AppAModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
    ]
  },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
