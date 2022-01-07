import { renderApp } from "../main.js"
import { DirectMessages } from "../friends/DirectMessage.js"
import { SendMsg } from "../message/MessageForm.js"
import { GiffyGram } from "../GiffyGram.js"
import { LoginForm } from "../auth/Login.js"



export const NavBar = () => {
    document.addEventListener("click", async (clickEvent) => {
        if (clickEvent.target.id === "messages") {
           renderApp( await DirectMessages())
        }
        if (clickEvent.target.id === "sendMsg"){
            renderApp(SendMsg())
        }
        if (clickEvent.target.id === "homepage"){
            renderApp(await GiffyGram())
        }
        if (clickEvent.target.id === "logout"){
            localStorage.removeItem("gg_user")
            renderApp(LoginForm())
        }
    })
    return `
    <div class="notification__count" id="messages">Messages</div>
    <div class="navigation__message" id="sendMsg">Send Msg</div>
    <div class="navigation__logout" id="logout">Logout</div>
    `
}