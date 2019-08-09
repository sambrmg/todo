$('#btnIncluir').click(function(){
    var conteudoTarefa = $('#texto').val();
$('.lista').append('<li>'+conteudoTarefa+'</li>');
});

$('.excluir').click(function(){

    $('li').remove();

});

/**marcar como feito **/

$('.feito').click(function(event){
    $( event.target ).parent().find('span').addClass('marcar');    
});