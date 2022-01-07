const API = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    posts: [],
    users: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

export const fetchUsers = async () => {
    return await fetch(`${API}/users`)
        .then(res => res.json())
        .then(
            (users) => {
                applicationState.users = users
                return applicationState.users.map((user) => ({...user}))
            }
        )
}

export const fetchPosts = async () => {
    return await fetch(`${API}/posts`)
        .then(res => res.json())
        .then((posts) => {
            applicationState.posts = posts
            return applicationState.posts.map((post) => ({...post})) 
        })
}

export const sendPost = (userPost) => {
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userPost)
    }
    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))


export const addUser = (userRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRequest)
    }
    return fetch(`${API}/users`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}