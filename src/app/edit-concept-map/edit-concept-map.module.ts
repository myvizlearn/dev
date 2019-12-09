import { ConceptMapModule } from './../create-concept-map/conceptmap/conceptmap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditConceptMapPage } from './edit-concept-map.page';

const routes: Routes = [
  {
    path: '',
    component: EditConceptMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConceptMapModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditConceptMapPage]
})
export class EditConceptMapPageModule {}
