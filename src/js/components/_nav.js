import {OPEN, ACTIVE, OVERFLOW_HIDDEN, BODY, HTMLBODY} from '../_constants';

const MENU_CONTACTS = 'is-contacts';
const nav = $('.js-nav');
const control = $('.js-nav-control');
const contacts = $('.js-nav-contacts');
const navDOM = nav.get(0);

const show = () => {
  control.addClass(ACTIVE);
  BODY.addClass(OVERFLOW_HIDDEN);
  nav.addClass(OPEN);
};

const hide = () => {
  nav.removeClass(MENU_CONTACTS);
  control.removeClass(ACTIVE);
  BODY.removeClass(OVERFLOW_HIDDEN);
};

nav.on('transitionend', e => {
  if (e.target !== navDOM || nav.hasClass(OPEN)) return;
  hide();
});

control.on('click', e => {
  e.preventDefault();
  if (nav.hasClass(OPEN)) {
    nav.removeClass(OPEN);
    control.removeClass(ACTIVE);
  } else {
    nav.addClass(OPEN);
    control.addClass(ACTIVE);
    BODY.addClass(OVERFLOW_HIDDEN);
  }
});

contacts.on('click', e => {
  e.preventDefault();

  nav.addClass(MENU_CONTACTS);
  nav.hasClass(OPEN) || (HTMLBODY.scrollTop() === 0)
    ? show()
    : HTMLBODY.animate({
      scrollTop: 0
    }, 700, show);
});


