// blob é um objeto que representa um arquivo no JS

document.getElementById("botao__salvar").addEventListener("click", function(){

    // pegar o texto escrito na textarea
    var texto = document.getElementById("conteudo").value

    // pegar o texto escrito no input "titulo"
    var nomeArquivo = document.getElementById("titulo").value

    // caso não seja informado um nom, seguirá com um nome padrao
    if (nomeArquivo === ""){
        nomeArquivo = "anotacao"
    }
// informando o tipo de arquivo, nesse caso um arquivo de texto
    var blob = new Blob([texto], {type: "text/plain"})

    var url = window.URL.createObjectURL(blob)

    // criar um link e gerar um .txt
    var link = document.createElement("a")
    link.href = url
    link.download = nomeArquivo + ".txt"

    // basicamente criar e apagar o link depois de baixar
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // desativar a edicao do conteudo
    document.getElementById("conteudo").disabled = true
    document.getElementById("titulo").disabled = true

})

// botao para apagar o que estiver escrito
document.getElementById("botao__apagar").addEventListener("click", function(){
    document.getElementById("titulo").value = ""
    document.getElementById("conteudo").value = ""
})

// botao de editarpara permitir a alteracao dos campos de texto e titulo
document.getElementById("botao__editar").addEventListener("click", function(){
    document.getElementById("conteudo").disabled = false
    document.getElementById("titulo").disabled = false
})