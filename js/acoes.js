function converterLista(){
    var lista = localStorage.getItem('lista');
    if(lista != null){
        return JSON.parse(lista);
    }
    return []
}

function converterListaSetItem(lista){
    localStorage.setItem('lista', JSON.stringify(lista))
}
function incluirLi(item){
    $('.lista ul').append('<li><span>' + item + '</span><button class="feito">Feito</button><button class="excluir">Excluir</button></li>');
}
var lista = converterLista();
if(lista != null){
    for (let index = 0; index < lista.length; index++) {
        incluirLi(lista[index])
    }
}


$('#btnIncluir').click(function () {
    var conteudoTarefa = $('#texto').val();
    if (conteudoTarefa == "") {
        $('#texto').addClass('tarefa-vazia ');
    } else {
        var lista = converterLista();
        lista.push(conteudoTarefa);
        converterListaSetItem(lista);
        incluirLi(conteudoTarefa)
        eventoExcluir();
        eventoFeito();
    }
});

$('#texto').keyup(function () {
    if ($(this).val() != "") {
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


