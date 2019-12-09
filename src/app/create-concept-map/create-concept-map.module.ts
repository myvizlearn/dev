import { AddResourcePageModule } from './add-resource/add-resource.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule, MenubarModule, DialogModule } from 'primeng/primeng';

import { CreateConceptMapPage } from './create-concept-map.page';
import { ConceptMapModule } from './conceptmap/conceptmap.module';

const routes: Routes = [
  {
    path: '',
    component: CreateConceptMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    AddResourcePageModule,
    // BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    ConceptMapModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateConceptMapPage]
})
export class CreateConceptMapPageModule {}
