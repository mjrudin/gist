window.GA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebarEl, $contentEl, gistsData) {
    var gistsCollection = new GA.Collections.Gists(gistsData);
    new GA.Routers.Gists($sidebarEl, $contentEl, gistsCollection);
    Backbone.history.start();
  }
};

