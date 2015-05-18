import Ember from 'ember';

export default Ember.Route.extend({
  linkedInAPI: Ember.inject.service(),
  model(attrs) {
    return this.get('linkedInAPI').profile(attrs.id);
  },

  activate: function(){
    Ember.$("html").velocity("scroll", { offset: 0, duration: 500 });
  }
});
