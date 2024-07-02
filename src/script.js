// $(document).ready(function() {
//     if (typeof jQuery == 'undefined') {
//         console.log('jQuery is not loaded');
//     } else {
//         (function() {
//             var windowH = $(window).height(),
//                 introEl = $('div.intro'),
//                 introHeadingH = introEl.find('h1').height();

//             if (introEl.length && introHeadingH) {
//                 introEl.css('padding', (windowH - introHeadingH) / 2 + 'px 0');

//                 $(document).on('scroll', function() {
//                     introEl.slideUp(1000, function() { $(document).off('scroll'); });
//                 });
//             } else {
//                 console.log('intro element or h1 not found');
//             }
//         })();
//     }
// });