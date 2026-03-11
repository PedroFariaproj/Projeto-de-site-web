function adicionarTarefa(){

    let input = document.getElementById("tarefaInput");
    let texto = input.value;

    if(texto === ""){
        alert("Digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    li.onclick = function(){
        li.classList.toggle("concluida");
    };

    let botao = document.createElement("button");
    botao.textContent = "X";

    botao.onclick = function(){
        li.remove();
    };

    li.appendChild(botao);

    document.getElementById("listaTarefas").appendChild(li);

    input.value = "";
}
