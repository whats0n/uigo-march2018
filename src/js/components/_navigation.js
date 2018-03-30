import {OPEN, ACTIVE, BODY} from '../_constants';

const trigger = $('.js-navigation-current');
const navigation = $('.js-navigation-out');

navigation.each((i,el) => {
  const container = $(el);
  const activeText = container.find('.'+ACTIVE).text();
  const triggerBtn = container.find('.js-navigation-current-text');
  triggerBtn.text(activeText);
});

trigger.on('click', function() {
  const that = $(this);
  const parent = that.parents('.js-navigation-out');
  (!parent.hasClass(OPEN)) 
  	? parent.addClass(OPEN)
  	: parent.removeClass(OPEN);
});
BODY.on('click', e => {
  if ($(e.target).closest(navigation).length || !navigation.hasClass(OPEN)) return;
  navigation.removeClass(OPEN);
});
