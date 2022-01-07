import { fetchMessages, fetchUsers } from "../data/provider.js"
import { NavBar } from "../nav/NavBar.js"


export const SendMsg = async () => {
    return `
    ${NavBar()}
    <div class="sendMsgForm">
    <h3>Direct Message</h3>
        <form>
            <fieldset>
                <label for="recipient">To:</label>
                <select class="dropbox" name="userOption">
                <option value="0">Please select a user</option>
                ${await userOptions()}
                </select>
            </fieldset>
            <fieldset>
                <label for="message">Message:</label>
                <input type="message" name="message" placeholder="Insert message here..." />
            </fieldset>
        </form>
        <button id="sendMsg">Send</button>
        <button id="cancelMsg">Cancel</button>
    </div>`
}

const userOptions = async () => {
    const users = await fetchUsers()
    
    const usersList = users.map((u) => {
        return `<option value="${u.id}">${u.username}</option>`
    })
    usersList.join("")
    return usersList
}

// export const SentMsgs = async () => {
//     const messages = await fetchMessages()
//     const user = localStorage.getItem("gg_user")
//     if (msg.authorId === user){
//     messages.map(msg => {(msg.authorId === user)
     
//         return 

// insert Sent messages below.... if no messages have been sent then display Oops Looks like you havent sent any messages

// "messages": [
//     {
//       "authorId": 1,
//       "recipientId": 2,
//       "text": "What up bro",
//       "read": true
//     }
//   ]