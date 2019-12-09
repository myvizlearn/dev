import { CreateConceptMapPageModule } from './create-concept-map/create-concept-map.module';
import { ViewSamplePageGuard } from './view-sample-page.guard';
import { ViewUserPagesGuard } from './view-user-pages.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'login', //dec4
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'sample',
  loadChildren: () => import('./sample/sample.module').then(m => m.SamplePageModule)
  // ,  canActivate: [ViewSamplePageGuard] //dec4
  },
  { path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  // ,  canActivate: [ViewUserPagesGuard] //dec4
  },
  { path: 'create-concept-map',
  loadChildren: () => import('./create-concept-map/create-concept-map.module').then(m => m.CreateConceptMapPageModule) },

  
  { path: 'edit-concept-map',
  loadChildren: () => import('./edit-concept-map/edit-concept-map.module').then(m => m.EditConceptMapPageModule)},
  { path: 'plants', loadChildren: './plants/plants.module#PlantsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
