import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'plant',
    label: 'Plant'
  }, {
    id: 'roots',
    label: 'Roots'
  }, {
    id: 'flowers',
    label: 'Flowers'
  }
  , {
    id: 'leaves',
    label: 'Leaves'
  }, {
    id: 'sunlight',
    label: 'Sunlight'
  }
//   , {
//     id: 'othercelestialbodies',
//     label: 'Other Celestial Bodies'
//   }
];



export const links: Edge[] = [
  
  {
    id: 'a',
    source: 'plant',
    target: 'roots',
    label: 'has'
  }, {
    id: 'b',
    source: 'plant',
    target: 'flowers',
    label: 'has'
  },
  {
    id: 'c',
    source: 'plant',
    target: 'leaves',
    label: 'has'
  },
  {
    id: 'd',
    source: 'plant',
    target: 'sunlight',
    label: 'needs'
  }
];