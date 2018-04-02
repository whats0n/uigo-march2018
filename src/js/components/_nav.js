import {OPEN, ACTIVE, OVERFLOW_HIDDEN, BODY, HTMLBODY} from '../_constants';

const MENU_CONTACTS = 'is-contacts';
const nav = $('.js-nav');
const control = $('.js-nav-control');
const header = $('.js-header');
const contacts = $('.js-nav-contacts');
const navDOM = nav.get(0);

const show = () => {
  control.addClass(ACTIVE);
  BODY.addClass(OVERFLOW_HIDDEN);
  nav.addClass(OPEN);
  header.addClass(OPEN);
};

const showAfterScroll = () => {
  HTMLBODY.animate({
    scrollTop: 0
  }, 700, show);
};

nav.on('transitionend', e => {
  if (e.target !== navDOM || nav.hasClass(OPEN)) return;
  nav.removeClass(MENU_CONTACTS);
});

control.on('click', e => {
  e.preventDefault();

  if (nav.hasClass(OPEN)) {
    nav.removeClass(OPEN);
    control.removeClass(ACTIVE);
    BODY.removeClass(OVERFLOW_HIDDEN);
    header.removeClass(OPEN);
  } else {
    HTMLBODY.scrollTop() === 0
      ? show()
      : showAfterScroll();
  }
  
});

contacts.on('click', e => {
  e.preventDefault();

  nav.addClass(MENU_CONTACTS);
  nav.hasClass(OPEN) || (HTMLBODY.scrollTop() === 0)
    ? show()
    : showAfterScroll();
});


