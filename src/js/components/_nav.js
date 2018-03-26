import {OPEN, ACTIVE, OVERFLOW_HIDDEN, BODY} from '../_constants';

const nav = $('.js-nav');
const control = $('.js-nav-control');

control.on('click', e => {
  e.preventDefault();
  nav.toggleClass(OPEN);
  control.toggleClass(ACTIVE);
  BODY.toggleClass(OVERFLOW_HIDDEN);
});
