GA.Views.GistListItem = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  tagName: "li",

  render: function () {
    var view = JST["gists/list_item"]({gist: this.model});

    this.$el.html(view);
    return this;
  }
})