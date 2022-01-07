import { NavBar } from "../nav/NavBar.js"



export const SendMsg = () => {
    return `<header class="navigation"><h1>Send a Dm</h1>
            ${NavBar()}
           </header>
            <div class="sendMsgForm">
            <h3>Direct Message</h3>
                <form>
                    <fieldset>
                        <label for="recipient">To:</label>
                        <select class="dropbox" name="userOption">
                        <option value="0">Please select a user</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label for="message">Message:</label>
                        <input type="message" name="message" placeholder="Insert message here..." />
                    </fieldset>
                </form>
                <button id="sendMsg">Send</button>
                <button id="cancelMsg">Cancel</button>
            </div>
        `
}

// insert Sent messages below.... if no messages have been sent then display Oops Looks like you havent sent any messages