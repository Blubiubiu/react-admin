import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/FriendLink",
        "exact": true,
        "component": require('../FriendLink/index.jsx').default,
        "title": "友情链接",
        "Routes": [require('../../../node_modules/_umi-plugin-react@1.3.4@umi-plugin-react/lib/plugins/title/TitleWrapper.jsx').default],
        "_title": "友情链接",
        "_title_default": "react-admin"
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "react-admin",
        "_title_default": "react-admin"
      },
      {
        "component": () => React.createElement(require('/Users/lsy/Desktop/code/react-admin/react-admin/node_modules/_umi-build-dev@1.3.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "react-admin",
        "_title_default": "react-admin"
      }
    ],
    "_title": "react-admin",
    "_title_default": "react-admin"
  },
  {
    "component": () => React.createElement(require('/Users/lsy/Desktop/code/react-admin/react-admin/node_modules/_umi-build-dev@1.3.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "react-admin",
    "_title_default": "react-admin"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
