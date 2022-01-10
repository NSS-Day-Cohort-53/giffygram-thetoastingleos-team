import { fetchMessages } from "../data/provider.js";
import { NavBar } from "../nav/NavBar.js"

export const DirectMessages = async () => {
    return`
    ${NavBar()}
    <div>
    ${await Messages()}
    </div>`

}




export const Messages = async () => {
    const messages = await fetchMessages()
    let html= "<ul>"
    const messageList = messages.map((message) => {
        return `<li id="${message.authorId}">
        <p class="message__tagline">${message.recipientId}</p>
        <p class="message__remark">${message.text}</p>
        </li>`
    })
    html += messageList.join("")
    html += "</ul>"
    return html
}
     


  


