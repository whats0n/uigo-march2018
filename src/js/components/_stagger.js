import {TimelineMax} from 'gsap';
export default props => {
  new TimelineMax()
    .staggerTo( props.elements, props.duration || 0.3, {
      y: props.y || 0,
      x: props.x || 0,
      opacity: props.opacity || 1,
      ease: props.ease || Power2.easeOut
    }, props.delay || 0.1 )
    .eventCallback('onComplete', props.onComplete, null);
};
