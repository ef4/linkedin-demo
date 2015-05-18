import Ember from 'ember';

export default Ember.Route.extend({
  linkedInAPI: Ember.inject.service(),
  model() {
    return this.get('linkedInAPI').contactSuggestions();
  }
});
