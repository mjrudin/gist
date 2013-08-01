GA.Views.GistShow = Backbone.View.extend({


  render: function () {
    var template = JST["gists/show"]({gist: this.model});

    this.$el.html(template);

    var gistFileList = new GA.Views.GistFileList({
                                    collection: this.model.get("gistFiles")})

    this.$el.append(gistFileList.render().el)

    return this;
  },
  events: {
    "click .favorite-button" : "favorite",
    "click .unfavorite-button" : "unfavorite",
    "click a.new-gist-file": "renderGistFileForm"
  },

  favorite: function(event) {
    var that = this;
    var favorite = new GA.Models.Favorite({
      gist_id: that.model.id
    })

    favorite.save(null, {
      success: function() {
        //Sets this' favorite to the favorite that was just made
        that.model.set({favorite: favorite});
        $(".favorite-buttons").toggleClass("favorited")
      }
    })
  },

  unfavorite: function(event) {
    var that = this;
    that.model.get("favorite").destroy({
      success: function() {
        that.model.unset("favorite");
        $(".favorite-buttons").toggleClass("favorited")
      }
    })
  },

  renderGistFileForm: function (event) {
    console.log("hit render file form");
    var form = new GA.Views.newGistFile({collection: this.model.get("gistFiles")})
    var target = $(event.target);

    target.before(form.render().el);
    target.remove();
  }
})