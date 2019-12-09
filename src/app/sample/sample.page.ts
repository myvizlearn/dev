import { ConceptMap } from "./../interfaces";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestoreModule,
  AngularFirestore
} from "@angular/fire/firestore";
import { Component, OnInit } from "@angular/core";
// NGX Graph Support
import { nodes, links } from "./data";
import { Edge, Node, ClusterNode, Layout } from "@swimlane/ngx-graph";
// import { link } from "fs";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.page.html",
  styleUrls: ["./sample.page.scss"]
})
export class SamplePage implements OnInit {
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
    
    // console.log("check concepMap",this.conceptMap)
    // this.conceptMapInfo = _angularFireStore
    //   .collection("sampleMap")
    //   .doc("solarSystem")
    //   .valueChanges()
    //   .subscribe(result => {
    //     console.log(result as String);
    //     // this.conceptMap = result;
    //     this.nodes = this.conceptMap.node;
    //     this.links = this.conceptMap.edge;
    //   });
  }

  ngOnInit() {
    console.log(this.conceptMap);
  }

  setSampleMap() {
    this.conceptMap.node = nodes;
    this.conceptMap.edge = links;
    this._angularFireStore
      .collection("sampleMap")
      .doc("solarSystem")
      .set({
        node: this.conceptMap.node,
        edge: this.conceptMap.edge
      })
      .then(result => console.info(result))
      .catch(err => {
        console.log("Error" + err);
      });
  }
}
