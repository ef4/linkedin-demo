import Ember from 'ember';
var Promise = Ember.RSVP.Promise;
var $ = Ember.$;

// You can switch these between mocks mode and proxies mode:

//var namespace = '/mock-api';
var namespace = '/api';

export default Ember.Service.extend({
  contactSuggestions() {
    if (this.suggestions) {
      return this.suggestions;
    }
    return this.suggestions = Promise.resolve($.ajax(`${namespace}/contact-suggestions`))
      .then(payload => payload.content.contacts_pymk_people_cards.people);
  },

  fetchProfile(id, params={}) {
    return Promise.resolve($.ajax({
      url: `${namespace}/profile/${id}`,
      data: params
    })).then(html => {
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(html, "text/html");
      let page = htmlDoc.querySelector('#body');
      var image = $(page.querySelector('.profile-picture img'));
      image.attr('data-person-image', id);
      $(page.querySelector('.top-card')).attr('data-person-id', id);
      let pageHTML = page.innerHTML;
      return { html: pageHTML };
    });
  },

  profile(id) {
    id = parseInt(id, 10);
    return this.contactSuggestions().then(contacts => {
      for (var contact of contacts.values()) {
        if (contact.memberID === id) {
          return this.fetchProfile(id, {
            authType: contact.authTokenType,
            authToken: contact.authTokenValue
          });
        }
      }
      return this.fetchProfile(id);
    });
  }

});
