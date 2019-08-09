$('#btnIncluir').click(function(){
    var conteudoTarefa = $('#texto').val();
$('.lista ul').append('<li><span>'+conteudoTarefa+'</span><button class="feito">Feito</button><button class="excluir">Excluir</button></li>');

});

$('.excluir').click(function(event){

    $(event.target).parent().remove();  

});

/**marcar como feito **/

$('.feito').click(function(event){
    $( event.target ).parent().find('span').addClass('marcar');    
});
