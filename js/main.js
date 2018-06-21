require.config({
  waitSeconds: 30,
  baseUrl: "./js/",
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    "jquery": "jquery-3.3.1.min",
    "popper": "popper",
    "bootstrap": "bootstrap",
    "dashboard": "dashboard",
    "react": "react-with-addons",
    "react-dom": "react-dom",
    "react-router": "react-router",
    "react-router-dom": "react-router-dom",
    "react-input-mask": "react-input-mask",
    "JSXTransformer": "JSXTransformer",
    "moment": "moment",
    "bootstrap-datetimejs": "bootstrap-datetimejs"
  },
  shim:{
    "bootstrap": {
      deps: ["jquery", "popper"]
    },
    "dashboard": {
      deps: ["bootstrap"]
    },
    "react": {
      deps: ["dashboard"]
    },
    "react-router": {
      deps: ["react", "react-dom"]
    },
    "react-input-mask": {
      deps: ["react", "react-dom"]
    },
    "react-router-dom": {
      deps: ["react-router"]
    },
    "bootstrap-datetimejs": {
      deps: ["moment"]
    }
  },
  jsx: {
    fileExtension: '.jsx',
    harmony: true,
    stripTypes: true
  }
});


require(['react', 'react-dom', 'jsx!components/Home'], function(React, ReactDOM, Home) {
  Home = React.createFactory(Home);

  // Mount the JSX component in the app container
  $(document).ready(function () {
    ReactDOM.render(
        Home(),
        document.getElementById('app'));
    });
    $('.hideAfterInit').remove();
});
