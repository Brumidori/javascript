let baseUrl = "https://jsonplaceholder.typicode.com/"
//consumindo api

const apiCall = (endpoint, method, data) => {
    let uri = baseUrl + endpoint
    return fetch(uri, {
        method: method,
        headers : {
            "Content-type" : "application/json;"
        },
        body: data ? data : null
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => error)
}

const apiGet = async (resource, id) => {
    let endpoint = id ? `${resource}/${id}` : resource
    console.log(await apiCall(endpoint, "GET"))
}

const apiPost = async (resource, data) => {
    let endpoint = resource
    console.log(await apiCall(endpoint, "POST"))
}

const apiPut = async (resource, id, data) => {
    let endpoint = `${resource}/${id}`
    console.log(await apiCall(endpoint, "PUT", data))
}

const apiDelete = async (resource, id) => {
    let endpoint = `${resource}/${id}`
    console.log(await apiCall(endpoint, "DELETE"))
}

apiGet("posts")
apiGet("posts", 67)
apiPost("posts", {
    "userId": 123,
    "title": "teste",
    "body": "corpo teste"
})
apiPut("posts", 44, {
    "userId": 123,
    "title": "teste",
    "body": "corpo teste"
})
apiDelete("posts", 44)
