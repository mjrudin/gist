GA.Views.newGistFile = Backbone.View.extend({

  tagName: "form",

  template: JST["gist_files/new"],

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  events: {
    "submit": "submit"
  },

  submit: function (event) {
    var view = this;
    event.preventDefault();

    var name = $("input[name='name']").val();
    var body = $("textarea[name='body']").val();
    this.collection.create({name: name, body: body}, {
      success: function () {
        view.remove();
      }
    });
  }
})