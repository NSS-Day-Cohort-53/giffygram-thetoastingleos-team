import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"


const applicationElement = document.querySelector(".giffygram")

export const renderApp = async (foo) => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        applicationElement.innerHTML = foo
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

renderApp(await GiffyGram())

