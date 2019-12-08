import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
