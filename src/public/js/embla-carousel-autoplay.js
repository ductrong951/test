!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("embla-carousel")):"function"==typeof define&&define.amd?define(["embla-carousel"],e):(n="undefined"!=typeof globalThis?globalThis:n||self).EmblaCarouselAutoplay=e(n.EmblaCarousel)}(this,(function(n){"use strict";function e(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=e(n),t={active:!0,breakpoints:{},delay:4e3,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function i(n){var e,a,r,l=o.default.optionsHandler(),s=l.merge(t,i.globalOptions),u=0;function d(){a.off("pointerDown",r),e.stopOnInteraction||a.off("pointerUp",c),f(),u=0}function p(){f(),u=window.setTimeout(m,e.delay)}function f(){u&&window.clearTimeout(u)}function c(){u&&(f(),p())}function m(){var n=a.internalEngine().index;if(e.stopOnLastSnap&&n.get()===n.max)return d();a.canScrollNext()?a.scrollNext():a.scrollTo(0),p()}var y={name:"autoplay",options:l.merge(s,n),init:function(n){a=n,e=l.atMedia(y.options),r=e.stopOnInteraction?d:f;var o=a.internalEngine().eventStore,t=a.rootNode(),i=e.rootNode&&e.rootNode(t)||t;a.on("pointerDown",r),e.stopOnInteraction||a.on("pointerUp",c),e.stopOnMouseEnter&&(o.add(i,"mouseenter",r),e.stopOnInteraction||o.add(i,"mouseleave",c)),o.add(document,"visibilitychange",(function(){if("hidden"===document.visibilityState)return f();c()})),o.add(window,"pagehide",(function(n){n.persisted&&f()})),e.playOnInit&&p()},destroy:d,play:p,stop:f,reset:c};return y}return i.globalOptions=void 0,i}));