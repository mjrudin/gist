GA.Views.GistFileList = Backbone.View.extend({

  tagName: "ul",

  render: function () {
    this.collection.each(this.renderListItem.bind(this))

    return this;
  },

  renderListItem: function (gistFile) {
    var item = new GA.Views.GistFileListItem({model: gistFile}).render().el;

    this.$el.append(item);
  }
})