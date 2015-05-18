export default function() {
  var duration = 500;

  this.transition(
    this.fromRoute('contact-suggestions'),
    this.toRoute('profile'),
    this.useAndReverse('explode', {
      matchBy: 'data-person-image',
      use: ['fly-to', { duration }]
    }, {
      pickOld: '.card-wrapper',
      pickNew: '.top-card',
      matchBy: 'data-person-id',
      use: ['fly-to', { duration }]
    }, {
      pickNew: '.card-wrapper',
      pickOld: '.top-card',
      matchBy: 'data-person-id',
      use: ['fly-to', { duration, movingSide: 'new' }]
    }, {
      use: 'fade'
    })
  );
}
