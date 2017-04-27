// Do your work in this file.

$('<div>', { 'class': 'view' })
    .appendTo(document.body);

$('<div>', { 'class': 'grass' })
    .appendTo('.view');

$('<div>', { 'class': 'sun' })
    .appendTo('.view');

var i = 1;

while (i < 6) {
    $('<div>', { 'class': 'ray-' + i })
        .appendTo('.sun');
    i++;
}

$('<div>', { 'class': 'mountain' })
    .appendTo('.view');

$('<div>', { 'class': 'mountain-top' })
    .appendTo('.mountain');

var j = 0;

do {
    j++;
    $('<div>', { 'class': 'mountain-cap-' + j })
        .appendTo('.mountain-top');
} while (j < 3);