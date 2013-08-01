GA.Views.GistFileListItem = Backbone.View.extend({
  tagName: "li",

  className: "gist-file-list-item",

  template: JST["gist_files/list_item"],

  render: function () {
    this.$el.html(this.template({gistFile: this.model}));
    return this;
  },

  events: {
    "click": "toggleBody",
    "click .gist-file-list-body": "hideBody"
  },

  toggleBody: function (event) {
    $(this.$el.children().first()).toggle("blind", "fast");
  }


})