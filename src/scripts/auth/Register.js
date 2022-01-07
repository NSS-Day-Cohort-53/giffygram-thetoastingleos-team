import { addUser } from "../data/provider.js"
import { renderApp } from "../main.js"
import { LoginForm } from "./Login.js"
import { Terms } from "./Terms.js"


const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", event => {
    if (event.target.id === "Loginbutton"){
        return applicationElement.innerHTML = LoginForm()
    }
    if (event.target.id === "Terms"){
        return applicationElement.innerHTML = Terms()
    }
    if (event.target.id === "register") {
      if (document.querySelector("input[name='psw']").value === document.querySelector("input[name='psw-repeat']").value) {
        const newPassword = document.querySelector("input[name='psw']").value
        const newEmail = document.querySelector("input[name='email']").value 
        const newUsername = document.querySelector("input[name='username']").value
        const newData = {
          username: newUsername,
          email: newEmail,
          password: newPassword,
        }
        return addUser(newData)
      }
    }
})

export const RegisterForm = () => {
    return applicationElement.innerHTML = `
    
    <form>
    <div class="container">
      <h1>Register for a GiffyGram Account</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>

      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" id="username" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>
  
      <button class="registerbtn" id="register">Register</button>
      <p>By creating an account you agree to our <button type="Terms" class="registerbtn" id="Terms">Terms & Service</button></p>
    </div>
  
    <div class="container signin">
      <p>Already have an account? <button type="Login" class="registerbtn" id="Loginbutton" > Login </button></p>
    </div>
  </form>
    `
}