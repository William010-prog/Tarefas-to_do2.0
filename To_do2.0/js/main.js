$(function() {
    $("#botao").click(inserirTarefa);
    $('select').formSelect();
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoObs =$(".campoObs").val();
    var prioridade =$(".select").val();
    var concluir;

    var linha = funLinha(campoTitulo, campoObs, prioridade, concluir);

    if (campoTitulo=="" || campoObs==""){
        window.alert("Preencha os campos.");
        return;
    }
    
    linha.find(".botaoDeletar").click(deletarLinha);
    tabela.append(linha);

    $(".campoTitulo").val("");
    $(".campoObs").val("");
    $(".campoTitulo").focus();

    event.preventDefault();
}

function funLinha(campoTitulo,campoObs, prioridade){ //função com parametro
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
    var colunaConcluir = $("<td>");
    var checkBox = $("<input>").addClass("botaoCheckbox").attr("type", "checkbox");
    var label = $("<label>");
    var span = $("<span>");
    var colunaDelete = $("<td>");
    var colunaPrioridade = $("<td>");

        if(prioridade === "Alta"){
    colunaPrioridade.html('<span class="prioridade-alta">Alta</span>');
        }

        if(prioridade === "Média"){
    colunaPrioridade.html('<span class="prioridade-media">Média</span>');
        }

        if(prioridade === "Baixa"){
    colunaPrioridade.html('<span class="prioridade-baixa">Baixa</span>');
        }   

    

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    
    label.append(checkBox, span);
    colunaConcluir.append(label);
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);
    
    linha.append(colunaTarefa);// anexa mais código
    linha.append(colunaObs);
    linha.append(colunaPrioridade);
    linha.append(colunaConcluir);
    linha.append(colunaDelete);

    return linha;
}

function deletarLinha(){
    event.preventDefault(); // tira o padrão
    $(this).parent().parent().remove();
}