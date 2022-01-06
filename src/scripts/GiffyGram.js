import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<header class="navigation" id="homepage"><h1>Giffygram</h1>
    ${NavBar()}
    </header>
    
    <br>

    <footer class="foot"><div class="foot__content"></div>
    ${Footer()}
    </footer>`
}
