import { map } from 'rxjs/operators';
import { ConceptMap } from './../interfaces';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestoreModule,
  AngularFirestore
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
// NGX Graph Support
import { nodes, links } from './data';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
})
export class PlantsPage implements OnInit {
  nodes: Node[] = nodes;
  firenode: Node[];
  firelink: Edge[];
  conceptMap: ConceptMap = {
    node: [],
    edge: []
  };
  conceptMapInfo: Observable<any>;
  // clusters: ClusterNode[] = clusters;
  links: Edge[] = links;
  constructor(
    private _angularFireStore: AngularFirestore,
    private _angularFireAuth: AngularFireAuth
  ) {

    console.log('check concepMap', this.conceptMap);
    console.log('node', this.nodes);
    console.log('link', this.links);
    // const db = _angularFireStore
    //   .collection('ConceptMaps')
    //   .doc('Plants');
    // db.ref.get()
    //   .then((doc) => {
    //     console.log('ref get', doc.data());
    //     console.log(JSON.stringify(doc.data()));
    //     const val = doc.data();
    //     this.nodes = val.concepts;
    //     this.links = val.propositions;

    //   });
    // this.nodes = this.conceptMap.node;
    // this.links = this.conceptMap.edge;
  }

  ngOnInit() {
    console.log(this.conceptMap);
  }

  setSampleMap() {
    this.conceptMap.node = nodes;
    this.conceptMap.edge = links;
    this._angularFireStore
      .collection('sampleMap')
      .doc('solarSystem')
      .set({
        node: this.conceptMap.node,
        edge: this.conceptMap.edge
      })
      .then(result => console.info(result))
      .catch(err => {
        console.log('Error' + err);
      });
  }
}
