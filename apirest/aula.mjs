console.log("hello world")

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((resposta) => resposta.json())
.then((jsonObject) => console.log(jsonObject))

//com o fetch pegamos um objeto (resposta)
//no caso transformamos em json, mas pode transformar em img por ex

fetch("https://jsonplaceholder.typicode.com/posts", {
    "method" : "post",
    "body" : JSON.stringify({
        "userID" : 123456,
        "title" : "publicacao de teste",
        "body" : "lorem ipsum dolor sit amet",
    }),
    "headers" : {
        "Content-type" : "application/json",
    }
})
.then((resposta) => resposta.json())
.then((jsonObject) => console.log(jsonObject))

// requisacao - method post/put/patch  (precisa de body)
// delete e get precisa de ID

/* API REST(full)
- protocolo cliente/servidor sem estado
- conjunto de operacoes - POST, GET, PUT, DELETE
- recursos e URI (identificador unico de recurso)
- separacao de capas (requisicao/resposta sem saber pra onde vao - so precisa saber o endpoint
        simplifica a arquitetura em rede - precisa proteger [https])
- hipermídia (a partir de uma solicitacao posso ter acesso a outras solitacoes)
*/