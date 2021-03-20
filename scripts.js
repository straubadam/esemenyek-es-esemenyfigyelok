$('button')

$('#elsogomb').click(function () {
    console.log("Igen, most rámkattintottál");
});

$('#masodikgomb').click(function () {
    $('#elsogomb').text("Hello");
});

$('#harmadikgomb').click(function () {
    $('button').css('background-color:yellow')

});