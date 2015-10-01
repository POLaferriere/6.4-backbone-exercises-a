var Blog = Backbone.Model.extend({
  defaults: {
    title: "",
    content: "",
  },

  validate: function(attributes){
    if(_.isEmpty(attributes)){
      return "You must write something";
    } else {
      return undefined;
    }
  }
});

export default Blog;
