import { LoginForm } from "./Login.js"
import { Terms } from "./Terms.js"


const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", event=> {
    if (event.target.id === "Loginbutton"){
        return applicationElement.innerHTML = LoginForm()
    }
    if (event.target.id === "Terms"){
        return applicationElement.innerHTML = Terms()
    }
})








export const RegisterForm = () => {
    return applicationElement.innerHTML = `
    
    <form action="action_page.php">
    <div class="container">
      <h1>Register for a GiffyGram Account</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>
  
      <p>By creating an account you agree to our <button type="Terms" class="registerbtn" id="Terms" >Terms</button></p>
      <button type="submit" class="registerbtn">Register</button>
    </div>
  
    <div class="container signin">
      <p>Already have an account? <button type="Login" class="registerbtn" id="Loginbutton" > Login </button></p>
    </div>
  </form>
    `
}