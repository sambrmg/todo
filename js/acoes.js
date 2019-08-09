$('#btnIncluir').click(function(){
    var conteudoTarefa = $('#texto').val();
$('.lista ul').append('<li><span>'+conteudoTarefa+'</span><button class="feito">Feito</button><button class="excluir">Excluir</button></li>');

});

$('.excluir').click(function(){

    $('li').remove();

});
