$('#btnIncluir').click(function(){
    var conteudoTarefa = $('#texto').val();
$('.lista').append('<li>'+conteudoTarefa+'</li>');
});

$('.excluir').click(function(){

    $('li').remove();

});