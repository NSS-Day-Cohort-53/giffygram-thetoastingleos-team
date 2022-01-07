const API = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(res => res.json())
        .then(
            (users) => {
                applicationState.users = users
            }
        )
}

export const getUsers = () => {
    return fetchUsers().then(() => { return applicationState.users.map((user) => ({...user}))});
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
        })
}