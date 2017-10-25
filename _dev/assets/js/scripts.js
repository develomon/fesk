'use strict';

(function ($) {
  // Drupal.behaviors.myBehavior = {
  //   attach: function (context, settings) {
  //     // Using once() to apply the myCustomBehaviour effect when you want to do just run one function.
  //     $(context).find('input.myCustomBehavior').once('myCustomBehavior').addClass('processed');
  //
  //     // Using once() with more complexity.
  //     $(context).find('input.myCustom').once('mySecondBehavior').each(function () {
  //       if ($(this).visible()) {
  //         $(this).css('background', 'green');
  //       }
  //       else {
  //         $(this).css('background', 'yellow').show();
  //       }
  //     });
  //   }
  // };

  Drupal.behaviors.fesk = {
    attach: function (context, settings) {

      WebFont.load({
        google: {
          families: ['Fascinate Inline']
        }
      });

    }
  };
}(jQuery));
