import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'sun',
    label: 'Sun'
  }, {
    id: 'light',
    label: 'Light'
  }, {
    id: 'heat',
    label: 'Heat'
  }
//   , {
//     id: 'othercelestialbodies',
//     label: 'Other Celestial Bodies'
//   }
];

export const clusters: ClusterNode[] = [
  {
    id: 'third',
    label: 'C',
    childNodeIds: ['c1', 'c2']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'sun',
    target: 'light',
    label: 'gives'
  }, {
    id: 'b',
    source: 'sun',
    target: 'heat',
    label: 'gives'
  }
  // ,
//    {
//     id: 'c',
//     source: 'solarsystem',
//     target: 'othercelestialbodies',
//     label: 'includes'
//   }, 
  // {
  //   id: 'd',
  //   source: 'planets',
  //   target: 'sun',
  //   label: 'orbit'
  // }
];