/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type BlogPostPage_QueryVariables = {
    readonly slug: string;
};
export type BlogPostPage_QueryResponse = {
    readonly viewerTwo: ({
    }) | null;
};



/*
query BlogPostPage_Query(
  $slug: String!
) {
  viewerTwo {
    ...BlogPostPage_viewerTwo_20J5Pl
  }
}

fragment BlogPostPage_viewerTwo_20J5Pl on ViewerTwo {
  blogPost(slug: $slug) {
    header
    content
    slug
    datePublished
    category
    images {
      hero
      preview
    }
    isValidPage
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BlogPostPage_Query",
  "id": null,
  "text": "query BlogPostPage_Query(\n  $slug: String!\n) {\n  viewerTwo {\n    ...BlogPostPage_viewerTwo_20J5Pl\n  }\n}\n\nfragment BlogPostPage_viewerTwo_20J5Pl on ViewerTwo {\n  blogPost(slug: $slug) {\n    header\n    content\n    slug\n    datePublished\n    category\n    images {\n      hero\n      preview\n    }\n    isValidPage\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BlogPostPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewerTwo",
        "storageKey": null,
        "args": null,
        "concreteType": "ViewerTwo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BlogPostPage_viewerTwo",
            "args": [
              {
                "kind": "Variable",
                "name": "slug",
                "variableName": "slug",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BlogPostPage_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewerTwo",
        "storageKey": null,
        "args": null,
        "concreteType": "ViewerTwo",
        "plural": false,
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '370f079db0f20b010d2648dcf32452e9';
export default node;
