<?php

/**
 * @file
 * Collection of twig functions.
 */

$function = new Twig_SimpleFunction('patternlab_path', function () {
  $path = getenv('PATTERNLAB_LOCAL_SERVER');
  return $path == "1" ? "" : "/themes/custom/fesk/_dev/pattern-lab";
});
