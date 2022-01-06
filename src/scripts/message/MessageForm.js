import { NavBar } from "../nav/NavBar.js"



export const SendMsg = () => {
    return `<header class="navigation"><h1>Send a Dm</h1>
            ${NavBar()}
           </header>
            <div class="sendMsgForm">
                <form>
                    <fieldset>
                        <label for="email">Email:</label>
                        <input type="text" name="email" autofocus placeholder="Email address" />
                    </fieldset>
                    <fieldset>
                        <label for="password">Password:</label>
                        <input type="password" name="password" placeholder="Password" />
                    </fieldset>
                </form>
                <button id="loginButton">Login</button>
            </div>
        `
}
