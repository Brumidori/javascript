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

// requisacao - method post  (precisa de body)
