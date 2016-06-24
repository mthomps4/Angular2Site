(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-App',
      template: '<h1>My First Angular2Site</h1>'
    })
    .Class({
      constructor: function(){}
    });//Ends core.Component
})(window.app || (window.app = {}));
