GA.Models.Favorite = Backbone.Model.extend({
  url: function () {
    return "/gists/" +this.attributes.gist_id+"/favorite";
  }
})