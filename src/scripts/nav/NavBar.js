import { renderApp } from "../main.js"
import { Messages } from "../friends/DirectMessage.js"

document.addEventListener("click", clickEvent => {
    // if (clickEvent.target.id === "dsfgsdfg") {
    //    renderApp(Messages())
    // }
})

export const NavBar = () => {
    return `
    <section class="notification__count">Messages</section>
    <section class="navigation__message">Send Msg</section>
    <section class="navigation__logout">Logout</section>
    `
}