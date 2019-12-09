import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export interface LoginCredential {
    email: string;
    password: string;
}

export interface ConceptMap {
    node: Node [];
    edge: Edge [];
}

export interface NewConceptMap {
    concepts: string;
    propositions: string;
}