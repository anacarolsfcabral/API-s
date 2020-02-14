//Consulta uma API enviando o link
// document.querySelector("#carregar-cep").onclick = function () {
//     let input = document.querySelector("#cep");
//     carregarCep(input.value);
// }

// function carregarCep(cep) {

//     fetch('https://viacep.com.br/ws/'+ cep + "/json")
//     //THEN: Espera o fetch ser resolvido e 
//     //      executa a função passada por parametro
//     .then(function (response) {
//         response.json().then(function (data) {
//             //Data: Resultado da consulta da API em Array
//             console.log(data);
//             document.querySelector('#conteudo').innerHTML = `
//                     <p>Cep: ${data.cep}</p>
//                     <p>Bairro: ${data.bairro}</p>
//                     <p>Rua: ${data.logradouro}</p>
//                 `
//         })
//     }).catch(function (error) {
//         alert('Deu erro aqui!');
//     })
// }

document.querySelector("#noticia").onclick = function carregarNoticia() {

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=eb6d67f048eb49d2bc1f6c03cf1893ea';
    var req = new Request(url);
    let container= document.getElementById('noticias');
    fetch(req)
        .then(function (response) {
            response.json().then(function (data) {
                data.articles.forEach(function (article) {
                container.innerHTML += `
                <div class="col-5">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title" id="titulo">${article.title}</h4>
                </div>
                <div class="card-body">
                    <img id="imagem" src="${article.urlToImage}" width="180" height="180">
                    <p id="texto">${article.description}</p>
                </div>
                <div class="card-footer">
                    <a href="linkNoticia" class="btn btn-primary">Ver Notícia</a>
                </div>
            </div>
        </div>
        `
    });
               
        })

    })
}

