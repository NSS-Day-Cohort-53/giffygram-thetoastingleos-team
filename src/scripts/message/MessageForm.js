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

