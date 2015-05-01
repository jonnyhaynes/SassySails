/**
 * Attach FastClick to the body
 */

FastClick.attach(document.body);

/**
 * Initialise inlineSVG
 */
if (Modernizr.inlinesvg) {
  loadJS('/js/libraries/inline-svg/inlineSVG.js', function() {
    inlineSVG();
  });
} else {
  var svgs = document.querySelectorAll('img.svg');
  forEachElement(svgs, function (svg, i) {
    var fallback = svg.getAttribute('data-fallback');
    svgs.src = fallback;
  });
}

/**
 * Initialise placeholders for browsers
 * that don't support them.
 */
if (!Modernizr.input.placeholder) {
  loadJS('/js/libraries/placeholders/placeholders.min.js');
}

/**
 * Initialise Cookie Disclaimer
 */
CookieDisclaimer.init({
  template: '/js/templates/cookie-banner.html'
});

/**
 * Initialise Picturefill
 */
picturefill();
