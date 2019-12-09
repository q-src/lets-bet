import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bet'
  },
  {
    path: 'bet',
    loadChildren: () => import('./bet/bet.module').then(mod => mod.BetModule),
  },
  {
    path: 'participation',
    loadChildren: () => import('./participation/participation.module').then(mod => mod.ParticipationModule),
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then(mod => mod.ScanModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: !environment.production
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
