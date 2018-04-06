import { ANIMATE } from '../_constants';
import { WIN, BODY } from '../_constants';
import STAGGER from './_stagger';

class OnScreen {

  constructor(props) {

    const start = props.threshold && props.threshold.start;
    const end = props.threshold && props.threshold.end;

    this._sections = $(props.selector);
    this._onStart = [];
    this._onEnd = [];
    this._threshold = {
      start: start || 1.2,
      end: end || 1.2
    };

    this._detectOnScroll();

  }

  _detectOnScroll() {

    const that = this;
    this._sections.each(function() {
      const $this = $(this);
      let enable = false;
      let scrollStart = WIN.scrollTop();
      WIN.on('scroll', () => {
        const sectionTop = $this.offset().top;
        const sectionBottom = sectionTop + $this.outerHeight();

        const winTop = WIN.scrollTop();
        const winHeight = WIN.outerHeight();

        const winStart = winTop + (winHeight/that._threshold.start);
        const winEnd = winTop + (winHeight/that._threshold.end);

        const direction = (winTop < scrollStart) ? 'up' : 'down';
        scrollStart = winTop;

        if (winStart >= sectionTop && winEnd <= sectionBottom) {
          !enable && that._onStart.length && that._onStart.forEach(fn => fn($this, direction));
          enable = true;
        } else {
          enable && that._onEnd.length && that._onEnd.forEach(fn => fn($this, direction));
          enable = false;
        }
      });
    });

  }

  onStart(fn) {
    this._onStart.push(fn);
    return this;
  }
  onEnd(fn) {
    this._onEnd.push(fn);
    return this;
  }

};

let parent = '[data-anim-parent]';
new OnScreen({ selector: parent })
  .onStart($section => {
    if (!$section.hasClass(ANIMATE)) {
      const items = $section.find('[data-anim-from]');
      STAGGER({
        elements: items,
        delay: 0.3,
        duration: 1.5
      });
    };
    $section.addClass(ANIMATE);
  } );

if ($(parent).length) {
  BODY.trigger('scroll');
};


$(document).ready(function() {

  var probeimage = $('.projects__out');
  var imagewidth = $('.projects__inner').width();

  /* imgcount - amount of images we need to rotate. */
  /* instead of (+2) we could use (+1 + (screen.width % imagewidth)), but that's too complex */
  /* so, one  will be hiding in the left side, another would cover the empty space in the right */
  var imgcount = ((WIN.width() - (WIN.width() % imagewidth)) / imagewidth) + 2;
  var contwidth = imgcount * imagewidth;


  /* since #cont is absolutely positioned, the #contrap's height would be 0. Let's set the height */
  $('.projects').css({'height':$('.projects__inner').height()});
  $('.projects__inner').css({'width': contwidth});

  // $('#cont').append(probeimage);
  /* -1 because we have probeimage */
  for (var i = 0; i < imgcount - 1; i++) {
    $('.projects__out').clone().appendTo('.projects__inner');
  }

  function eternalmotion() {
    $('.projects__inner .projects__out').first().animate({ left: -imagewidth }, 20000, 'linear',
      function() {
        $('.projects__inner .projects__out:first').css({'left': 0}).appendTo('.projects__inner');
        console.log('i');
        eternalmotion();
      }
    );
  }

  eternalmotion();

});
