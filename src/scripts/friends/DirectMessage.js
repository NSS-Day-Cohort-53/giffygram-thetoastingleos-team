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
        return `<li id="${message.id}">
        <p class="message__tagline">${message.title}</p>
        <img class="message__image" src="${message.imageURL}"/>
        <p class="message__remark">${message.Description}</p>
        <p class="message__tagline">messaged by ${message.authorName} on ${message.timestamp}</p>
        </li>`
    })
    html += messageList.join("")
    html += "</ul>"
    return html
}
     


  


// window.addEventListener("SentMsg", receiveMessage);

// const applicationElement = document.querySelector(".giffygram")

// document.addEventListener("click", event => {
//     if (event.target.id === "Home"){
//         return applicationElement.innerHTML = (Home)
//     }
