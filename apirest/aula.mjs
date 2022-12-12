console.log("hello world")

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((resposta) => resposta.json())
.then((jsonObject) => console.log(jsonObject))

//com o fetch pegamos um objeto
//no caso transformamos em json, mas pode transformar em img por ex