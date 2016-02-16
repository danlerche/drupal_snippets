<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php
$today = date('Ymd');
$tomorrow_format = new DateTime('tomorrow');
$tomorrow = $tomorrow_format->format('Ymd');
$next_week_format = new DateTime('next Monday');
$next_week = $next_week_format->format('Ymd');
$date_cleanup = strtotime($output);
$day_of_the_week = date('l', $date_cleanup);
$next_week_display = date('l, F d', $date_cleanup);
if (strcmp($output, $today) == 0) { print '<div class="day">Today</div>';}
elseif (strcmp($output, $tomorrow) == 0) { print '<div class="day">Tomorrow</div>';}
elseif ($output >= $next_week) { print '<div class="day">' .$next_week_display . '</div>';}
else {print '<div class="day">' . $day_of_the_week . '</div>';}
?>
