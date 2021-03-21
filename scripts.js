$('button')

$('#elsogomb').click(function () {
    console.log("Igen, most rámkattintottál");
});

$('#masodikgomb').click(function () {
    $('#elsogomb').text("Hello");
});

$('#harmadikgomb').click(function () {
    let beolvasas = $('#szinbevitel').val();
    $('#elsogomb').css('background-color', beolvasas);
    $('#masodikgomb').css('background-color', beolvasas);
    $('#harmadikgomb').css('background-color', beolvasas);

});