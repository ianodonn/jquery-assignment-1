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