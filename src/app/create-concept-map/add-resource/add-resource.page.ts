import { ConceptMap } from './../../interfaces';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
  Form
} from '@angular/forms';
import { Concept } from '../conceptmap/conceptmap.types';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

import {
  AngularFirestoreModule,
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.page.html',
  styleUrls: ['./add-resource.page.scss']
})
export class AddResourcePage implements OnInit {
  // @Input() concept: Concept;
  concept: Concept;
  conceptMapTitleResource: string;

  public formResource: FormGroup;
  constructor(
    navParams: NavParams,
    private _formBuilder: FormBuilder,
    private _angularFireStore: AngularFirestore,
    private _toastController: ToastController,
    private _modalController: ModalController
  ) {
    this.concept = navParams.get('cpt');
    this.conceptMapTitleResource = navParams.get('title');
    console.log('console log constructor', this.concept, '=', this.conceptMapTitleResource);
    this.formResource = this._formBuilder.group({
       resource: this._formBuilder.array([this.initResource()])
    });
  }

  closeModal() {
    this._modalController.dismiss();
  }

  initResource(): FormGroup {
    return this._formBuilder.group({
      resourcetype: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  addNewResource(): void {
    const control = this.formResource.controls.resource as FormArray;
    control.push(this.initResource());
  }

  removeResource(i: number): void {
    const control = this.formResource.controls.resource as FormArray;
    control.removeAt(i);
  }

  manage(val: any): void {
    console.dir(val);
    this.concept.resources = val;
    console.log(this.concept);
    // const userRef: AngularFirestoreDocument<any> = this._angularFireStore.doc(
    //   `ConceptMaps/${this.conceptMapTitleResource}`);
    // userRef.update({testField: val});
    this._modalController.dismiss(this.concept);
  }

  ngOnInit() {}
}
