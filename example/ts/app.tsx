/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import 'todomvc-common';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import ScrollManager from 'found-scroll/lib/ScrollManager';

import FarceActions from 'farce/lib/Actions';
import createConnectedRouter from 'found/lib/createConnectedRouter';

import {installRelayDevTools} from 'relay-devtools';
import { Provider } from 'react-redux';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import store from './reduxStore';

// Useful for debugging, but remember to remove for a production deploy.
installRelayDevTools();

const mountNode = document.getElementById('root');

function fetchQuery(
  operation: any,
  variables: any,
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

store.dispatch(FarceActions.init());
const render = createRender({});

const RenderScrollManager = (renderArgs: any) => (
  <ScrollManager renderArgs={renderArgs}>{render(renderArgs)}</ScrollManager>
);

const ConnectedRouter = createConnectedRouter({
  render: RenderScrollManager,
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter resolver={new Resolver(environment)} />
  </Provider>,
  mountNode
);
