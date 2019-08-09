$('#btnIncluir').click(function(){
    var conteudoTarefa = $('#texto').val();
$('.listaTarefas').append('<li>'+conteudoTarefa+'</li>');
});

