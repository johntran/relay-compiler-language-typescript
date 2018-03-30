/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type BlogPostPage_viewerTwo = {
    readonly blogPost: ({
        readonly header: string | null;
        readonly content: string | null;
        readonly slug: string | null;
        readonly datePublished: string | null;
        readonly category: string | null;
        readonly images: ({
            readonly hero: string | null;
            readonly preview: string | null;
        }) | null;
        readonly isValidPage: boolean | null;
    }) | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "BlogPostPage_viewerTwo",
  "type": "ViewerTwo",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "slug",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "blogPost",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug",
          "type": "String"
        }
      ],
      "concreteType": "BlogPost",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "header",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "content",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "slug",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "datePublished",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "category",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "images",
          "storageKey": null,
          "args": null,
          "concreteType": "BlogPostImages",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hero",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "preview",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isValidPage",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'a14d7160560d3e866f5cd7b5a0e51096';
export default node;
