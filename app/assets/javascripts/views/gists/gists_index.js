GA.Views.GistsIndex = Backbone.View.extend({
  tagName: "ul",
  template: JST['gists/index'],

  initialize: function () {
    var that = this;
    that.listenTo(that.collection, "add", function (gist) {
      that.$el.append(new GA.Views.GistListItem({model: gist}).render().el)
    })
  },

  render: function () {
    var that = this;

    this.$el.html(this.template())
    that.collection.each(function (gist) {
      var listItem = new GA.Views.GistListItem({model: gist}).render().el;

      that.$el.append(listItem);
    });

    return that;
  }

});
