import { renderApp } from "../main.js"
import { Messages } from "../friends/DirectMessage.js"
import { SendMsg } from "../message/MessageForm.js"
import { GiffyGram } from "../GiffyGram.js"
import { LoginForm } from "../auth/Login.js"


export const NavBar = () => {
    document.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "messages") {
           renderApp(Messages())
        }
        if (clickEvent.target.id === "sendMsg"){
            renderApp(SendMsg())
        }
        if (clickEvent.target.id === "homepage"){
            renderApp(GiffyGram())
        }
        if (clickEvent.target.id === "logout"){
            localStorage.removeItem("gg_user")
            renderApp(LoginForm())
        }
    })
    return `
    <section class="notification__count" id="messages">Messages</section>
    <section class="navigation__message" id="sendMsg">Send Msg</section>
    <section class="navigation__logout" id="logout">Logout</section>
    `
}