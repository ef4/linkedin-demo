import Ember from 'ember';
export default Ember.Component.extend({
  classNames: ['card', 'shrunken-card'],
  attributeBindings: ['data-member-id'],
  'data-member-id': Ember.computed.alias('person.memberID')
});
