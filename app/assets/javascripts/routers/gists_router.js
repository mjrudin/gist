GA.Routers.Gists = Backbone.Router.extend({

  initialize: function($sidebarEl, $contentEl, gistsCollection) {
    this.$sidebarEl = {container: $sidebarEl, currentView: null};
    this.$contentEl = {container: $contentEl, currentView: null};
    this.gistsCollection = gistsCollection;
    this.index();
    this.show(gistsCollection.models[0].id)
  },

  routes: {
    "" : "index",
    "gists/new" : "new",
    "gists/:id" : "show"
  },

  index: function () {
    var view = new GA.Views.GistsIndex({collection: this.gistsCollection})

    this._swapView(view, this.$sidebarEl)
  },

  show: function (id) {
    var gist = this.gistsCollection.get(id);
    var view = new GA.Views.GistShow({model: gist});

    this._swapView(view, this.$contentEl)
  },

  new: function () {
    var view = new GA.Views.GistNew({collection: this.gistsCollection});

    this._swapView(view, this.$contentEl)
  },

  _swapView: function (newView, container) {
    container.currentView && container.currentView.remove();
    container.currentView = newView;

    container.container.html(newView.render().$el)
  }

});
