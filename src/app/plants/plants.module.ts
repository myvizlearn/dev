import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlantsPage } from './plants.page';
import { NgxGraphModule } from '@swimlane/ngx-graph';

const routes: Routes = [
  {
    path: '',
    component: PlantsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxGraphModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlantsPage]
})
export class PlantsPageModule {}
