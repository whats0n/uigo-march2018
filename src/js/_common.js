import {DOC, BODY, NO_TOUCH} from './_constants';
import {isTouch} from './_utils';

DOC.ready(() => {
  if (!isTouch()) BODY.addClass(NO_TOUCH);
  require('./components');
});
