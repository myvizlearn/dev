import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ConceptMapComponent } from '../create-concept-map/conceptmap/conceptmap.component';

@Component({
  selector: 'app-edit-concept-map',
  templateUrl: './edit-concept-map.page.html',
  styleUrls: ['./edit-concept-map.page.scss'],
})
export class EditConceptMapPage implements AfterViewInit  {

  // @ViewChild('graphContainer',  {static: false}) graphContainer: ElementRef;
  @ViewChild(ConceptMapComponent, { static: true }) cmap: ConceptMapComponent;

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
        this.cmap.import('{concepts:[],propositions:[]}');
        this.importTool.visible = false;
        this.importTool._file = undefined;
      } catch (err) {
        // catch error
      }
    },
    disabled: () => !this.importTool._file
  };

  constructor(
    private _angularFireStore: AngularFirestore,
  ) {

  }
  ngAfterViewInit() {
    // const graph = new mxGraph(this.graphContainer.nativeElement);

    // try {
    //   const parent = graph.getDefaultParent();
    //   graph.getModel().beginUpdate();

    //   const vertex1 = graph.insertVertex(parent, '1', 'Vertex 1', 0, 0, 200, 80);
    //   const vertex2 = graph.insertVertex(parent, '2', 'Vertex 2', 0, 0, 200, 80);

    //   graph.insertEdge(parent, 'none', 'none2', vertex1, vertex2);
    // } finally {
    //   graph.getModel().endUpdate();
    //   new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
  //   }
  }

  loadLocal() {
    const db = this._angularFireStore
      .collection('ConceptMaps')
      .doc('Plants');

    db.ref.get()
      .then((doc) => {
        console.log('ref get', doc.data(), doc);
        console.log(JSON.stringify(doc.data()));
        this.cmap.import(JSON.stringify(doc.data()));
      });
    // db.valueChanges().subscribe ( res => console.log('res value changes', res));
    // db.snapshotChanges().subscribe ( res => {
    //   console.log('res snapshot', res);
    //  });

    //   .get()
    //   .then(() => {
    //     const toast = this._toastController.create({
    //       message: 'Concept Map save successfully!',
    //       duration: 2000,
    //       position: 'top'
    //     });
    //     toast.then(toastMessage => {
    //       toastMessage.present();
    //     });
    //   })
    //   .catch(err => {
    //     console.log('Error' + err);
    //   });
    // this.importTool.visible = true;
    // const filedata = new Blob ('{concepts:[{text:Test,x:263,y:227,id:e7dab002}],propositions:[]}');
    // try {
    // this.cmap.import('"{"concepts":[{"text":"Test","x":263,"y":227,"id":"e7dab002"}],"propositions":[]}"');
    // } catch (e) {
    //   console.log('error', e);
    // }
  }

}
