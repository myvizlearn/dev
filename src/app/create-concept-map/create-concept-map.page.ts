import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HostListener, ViewChild, DoCheck } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
  Form
} from '@angular/forms';

import { MenuItem, Menu } from 'primeng/primeng';
import {
  MenuController,
  ToastController,
  ModalController
} from '@ionic/angular';

import { ConceptMapComponent } from './conceptmap/conceptmap.component';

import { KeyCombination } from './conceptmap/utils';
import { ie } from './etc';
import {
  AngularFirestoreModule,
  AngularFirestore
} from '@angular/fire/firestore';

import { NewConceptMap } from '../interfaces';
import { Concept } from './conceptmap/conceptmap.types';
import { AddResourcePage } from './add-resource/add-resource.page';

@Component({
  selector: 'app-create-concept-map',
  templateUrl: './create-concept-map.page.html',
  styleUrls: ['./create-concept-map.page.scss']
})
export class CreateConceptMapPage implements DoCheck {
  @ViewChild(ConceptMapComponent, { static: true }) cmap: ConceptMapComponent;

  ctrlA = new KeyCombination('A', [KeyCombination.modifierKey.ctrl]);
  ctrlS = new KeyCombination('S', [KeyCombination.modifierKey.ctrl]);
  ctrlO = new KeyCombination('O', [KeyCombination.modifierKey.ctrl]);
  hideMenu = false;
  menuCtrl: any;
  conceptMapTitle: string;
  isEnabled: boolean;
  public formResource: FormGroup;

  // newSelection = false;

  menu: MenuItem[] = [
    {
      label: 'File',
      items: [
        {
          label: 'Import (Ctrl+O)',
          command: () => (this.importTool.visible = true)
        },
        {
          label: 'Export (Ctrl+S)',
          command: () => this.export()
        }
      ]
    },
    {
      label: 'Edit',
      items: [
        {
          label: 'Select All (Ctrl+A)',
          command: () => this.cmap.selectAll()
        },
        {
          label: 'Delete (Delete)',
          command: () => this.cmap.deleteSelected()
        }
      ]
    }
  ];

  importTool = {
    // todo - refactor this
    _file: undefined,
    visible: false,
    chooseFile: event => {
      if (event.target.files[0]) {
        const reader = new FileReader();
        reader.onloadend = e => {
          this.importTool._file = reader.result;
        };
        reader.readAsText(event.target.files[0]);
      } else {
        this.importTool._file = undefined;
      }
    },
    loadFile: () => {
      try {
        this.cmap.import(this.importTool._file);
        this.importTool.visible = false;
        this.importTool._file = undefined;
      } catch (err) {
        // catch error
      }
    },
    disabled: () => !this.importTool._file
  };

  get isEmpty() {
    return this.cmap.cmap.concepts.size === 0;
  }

  constructor(
    private router: Router,
    public menuConrtrol: MenuController,
    private _angularFireStore: AngularFirestore,
    private _toastController: ToastController,
    private _modalController: ModalController
    // private _formBuilder: FormBuilder
  ) {
    this.menuCtrl = menuConrtrol;
    this.ionViewWillEnter(this.menuCtrl);
    this.hideMenu = true;

    // this.formResource = this._formBuilder.group({
    //   type: ["", Validators.required],
    //   resource: this._formBuilder.array([this.initResource()])
    // });
  }

  // initResource(): FormGroup {
  //   return this._formBuilder.group({
  //     type: ["", Validators.required]
  //   });
  // }

  // addNewResource(): void {
  //   const control = this.formResource.controls.type as FormArray;
  //   control.push(this.initResource());
  // }

  // removeResource(i: number): void {
  //   const control = this.formResource.controls.type as FormArray;
  //   control.removeAt(i);
  // }

  // manage(val: any): void {
  //   console.dir(val);
  // }

  ionViewWillEnter(menuCtrl: MenuController) {
    // this.menuCtrl.enable(false);
    // menuCtrl.close('sideMenu');
  }

  showMenu() {
    this.hideMenu = false;
    //  this.menuCtrl.enable(true,'sideMenu');
  }

  ngDoCheck() {
    // todo - casting below is posibly a bug introduced in primeNG 5
    // todo - refactor this whole method.
    (this.menu[0].items[1] as MenuItem).disabled = this.isEmpty;
    (this.menu[1].items[0] as MenuItem).disabled = this.isEmpty;
    (this.menu[1].items[1] as MenuItem).disabled =
      this.cmap.selection.selectedConceptComponent.size === 0 &&
      this.cmap.selection.selectedPropositionComponent.size === 0;
  }

  export() {
    if (ie) {
      window.navigator.msSaveBlob(
        new Blob([this.cmap.export()]),
        'ConceptMap.json'
      );
    } else {
      // Create a downloadable file through data URI
      // reference http://stackoverflow.com/a/18197341
      const a = document.createElement('a');
      a.style.display = 'none';
      a.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' +
          encodeURIComponent(this.cmap.export())
      );
      a.setAttribute('download', 'ConceptMap.json');

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    this.cmap.export();
  }

  clear() {
    this.cmap.selectAll();
    this.cmap.deleteSelected();
  }

  save() {
    console.log(this.cmap.export());
    const val: NewConceptMap = JSON.parse(this.cmap.export());

    console.log(val);
    console.log(val.concepts);
    console.log(val.propositions);

    this._angularFireStore
      .collection('ConceptMaps')
      .doc(this.conceptMapTitle)
      .set({
        concepts: val.concepts,
        propositions: val.propositions
      })
      .then(() => {
        const toast = this._toastController.create({
          message: 'Concept Map save successfully!',
          duration: 2000,
          position: 'top'
        });
        toast.then(toastMessage => {
          toastMessage.present();
        });
      })
      .catch(err => {
        console.log('Error' + err);
      });
  }

  @HostListener('window:keydown', ['$event']) keyDown(event) {
    // DEL: delete
    if (event.key === 'Delete' || event.key === 'Del' || event.which === 46) {
      this.cmap.deleteSelected();
    }
    // Ctrl-A: select all
    else if (this.ctrlA.match(event)) {
      this.cmap.selectAll();
      event.preventDefault();
    }
    // Ctrl-S: export
    else if (this.ctrlS.match(event)) {
      this.export();
      event.preventDefault();
    }
    // Ctrl-O: open
    if (this.ctrlO.match(event)) {
      this.importTool.visible = true;
      event.preventDefault();
    }
  }

  @HostListener('window:click', ['$event']) click(event) {
    this.isEnabled = this.cmap.getSingleSelection !== undefined;
    console.log(this.isEnabled, ' - ', this.cmap.getSingleSelection);
    // if (this.isEnabled) {
    //   const toast = this._toastController.create({
    //     message: 'Click on + button to add resources',
    //     duration: 2000,
    //     position: 'top'
    //   });
    //   toast.then(toastMessage => {
    //     toastMessage.present();
    //   });
    // }
  }

  async addResource(concept: Concept, conceptMapTitle: string) {
    console.log(concept.text + '- Adding Resources' + '-' + conceptMapTitle);
    const viodeModal = await this._modalController.create({
      component: AddResourcePage,
      componentProps: {
        cpt: concept,
        title: conceptMapTitle
      }
    });
    return viodeModal.present();
  }
}
