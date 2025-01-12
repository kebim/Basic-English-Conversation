<?php
// File to store the counter value
$file = 'counter.txt';

// Check if the counter file exists. If not, create it and set initial value.
if (!file_exists($file)) {
    file_put_contents($file, 0);
}

// Get the current counter value
$counter = file_get_contents($file);

// Increment the counter
$counter++;

// Update the counter in the file
file_put_contents($file, $counter);

// Return the counter value
echo $counter;
?>
