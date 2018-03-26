export const mediaWidth = width => window.matchMedia(`(max-width: ${width}px)`).matches;

export const isTouch = () => 'ontouchstart' in window;

export const buildIcon = name => `<svg class="icon icon-${name}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${name}"></use></svg>`;
