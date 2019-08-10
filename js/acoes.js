$('#btnIncluir').click(function () {

    var conteudoTarefa = $('#texto').val();

    if (conteudoTarefa == "") {
       
            $('#texto').addClass('tarefa-vazia ');
    } else{

        $('.lista ul').append('<li><span>' + conteudoTarefa + '</span><button class="feito">Feito</button><button class="excluir">Excluir</button></li>');
        eventoExcluir();
        eventoFeito();
    }
});

    $('#texto').keydown(function(){
        if ( $(this).val() != ""){
            $('#texto').removeClass('tarefa-vazia ');
        } else {
            $('#texto').addClass('tarefa-vazia ');
        }
        
    });

function eventoExcluir() {
        $('.excluir').click(function (event) {
            $(event.target).parent().remove();
        });

    }

/**marcar como feito **/
function eventoFeito() {
        $('.feito').click(function (event) {
            $(event.target).parent().find('span').addClass('marcar');
        })
    };

  
