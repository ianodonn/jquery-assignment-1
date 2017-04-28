// Do your work in this file.

// $('<div>', { 'class': 'box' })
//     .appendTo(document.body);

for (var i = 1; i < 197; i++) {
    $('<div>', { 'class': 'box' })
    .appendTo(document.body);

    // if (i % 2 == 0) {
    //     $('.box').addClass('type-1');
    //     console.log("i is even");
    // } else {
    //     $('.box').addClass('type-2');
    //     console.log("i is odd");
    // }
    $('div').addClass(function(index, currentClass){
        var newClass;
        if(index % 2==0){
            newClass = "type-1";
        }else{
            newClass = "type-2";
        }
        return newClass;
    });

}
function boxClicked(){
    window.alert('hey');
}
$('.box').click(boxClicked);