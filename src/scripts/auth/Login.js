import { getUsers } from "../data/provider.js"
import { GiffyGram } from "../GiffyGram.js"
import { renderApp } from "../main.js"
import { RegisterForm } from "./Register.js"




document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        getUsers().then((userState) => {
            const email = document.querySelector("input[name='email']").value
            const password = document.querySelector("input[name='password']").value
    
            for (const user of userState) {
                if (user.email === email && user.password === password) {
                    foundUser = user
                }
            }
    
            if (foundUser !== null) {
                localStorage.setItem("gg_user", foundUser.id)
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
                renderApp(GiffyGram())
            } else {
                window.alert("You have an incorrect username/password")
            }
        })
    } 
    if (clickEvent.target.id === "RegisterButton") {
        //call to register form
        RegisterForm() 
    }
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
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
            
            <button id="RegisterButton">Register as a New User</button>
        </div>
    `
}

