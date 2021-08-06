function salvarNome() {
 
    var nomeUser = document.getElementById("nomeUser").value;
    var tabela = document.getElementById("tabela").innerHTML;
 
    if(nomeUser){
    tabela += "<tr><td>" + nomeUser + "</td><td><button class='btn btn-success'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
    document.getElementById("nomeUser").value = "";
    } else {
        alert("por favor preencher a espaço");
    }
}
 
