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
    fetchUsers()
    return applicationState.users.map((user) => ({...user}))
}
