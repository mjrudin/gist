GA.Models.Gist = Backbone.Model.extend({
  initialize: function (data) {
    this.attributes = this.parse(data)
  },

  parse: function(object){
    if (object.favorite) {
      object.favorite.gist_id = object.id
      object.favorite = new GA.Models.Favorite(object.favorite);
      object.favorite.id = null;
    }

    object.gistFiles = new GA.Collections.GistFiles(object.gist_files);
    object.gistFiles.url = "/gists/"+object.id+"/gist_files";
    return object;
  },

  favoriteClass: function () {
    if (this.attributes.favorite) return " favorited";
  }
});
