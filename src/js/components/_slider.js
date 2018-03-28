import {ACTIVE} from '../_constants';

const sliders = $('.js-slider');

const showIMG = (slider, pictures, e) => {
  const index = slider
    .find('.js-slider-slide')
    .eq(e.item.index)
    .data('index');

  pictures
    .removeClass(ACTIVE)
    .filter(`[data-index="${index}"]`)
    .addClass(ACTIVE);
};

sliders.length && sliders.each((i, slider) => {
  slider = $(slider);
  const pictures = slider.find('.js-slider-picture');
  const content = slider.find('.js-slider-content');

  content
    .owlCarousel({
      loop: true,
      items: 1,
      mouseDrag: false,
      touchDrag: false,
      autoplay:true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      animateOut: 'fadeOut',
      dots: false,
      onChanged(e) {
        showIMG(slider, pictures, e);
      },
      onInitialized(e) {
        showIMG(slider, pictures, e);
      }
    });
});
