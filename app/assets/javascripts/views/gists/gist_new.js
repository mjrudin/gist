GA.Views.GistNew = Backbone.View.extend({
  template: JST["gists/form"],
  tagName: "form",

  events: {
    "submit" : "submit"
  },

  render: function () {
    var view = this.template()

    this.$el.html(view)
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var title = $("input[type='text']").val()
    this.collection.create({title: title});

  }

})