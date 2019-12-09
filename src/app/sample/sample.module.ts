import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SamplePage } from './sample.page';
// NGX Graph support
import { NgxGraphModule } from '@swimlane/ngx-graph';

const routes: Routes = [
  {
    path: '',
    component: SamplePage
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
  declarations: [SamplePage]
})
export class SamplePageModule {}
