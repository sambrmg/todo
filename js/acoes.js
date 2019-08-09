$('#btnIncluir').click(function(){
    var conteudoTarefa = $('#texto').val();
$('.lista ul').append('<li><span>'+conteudoTarefa+'</span><button class="feito">Feito</button><button class="excluir">Excluir</button></li>');
eventoExcluir ();
});
function eventoExcluir (){
    $('.excluir').click(function(event){
        $(event.target).parent().remove(); 
    });

}
