import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'solarsystem',
    label: 'Solar System'
  }, {
    id: 'sun',
    label: 'Sun'
  }, {
    id: 'planets',
    label: 'Planets'
  }
//   , {
//     id: 'othercelestialbodies',
//     label: 'Other Celestial Bodies'
//   }
];



export const links: Edge[] = [
  {
    id: 'a',
    source: 'solarsystem',
    target: 'sun',
    label: 'includes'
  }, {
    id: 'b',
    source: 'solarsystem',
    target: 'planets',
    label: 'includes'
  },
  {
    id: 'd',
    source: 'planets',
    target: 'sun',
    label: 'orbit'
  }
];