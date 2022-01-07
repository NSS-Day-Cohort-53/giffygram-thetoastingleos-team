import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { Posts } from "./feed/PostList.js"

export const GiffyGram = async () => {

    // Show main main UI
    return `<header class="navigation" id="homepage"><h1>Giffygram</h1>
    ${NavBar()}
    </header>
    <section class="giffygram__feed">
    ${await Posts()}
    </section>
    <br>

    <footer class="foot"><div class="foot__content"></div>
    ${Footer()}
    </footer>`
}
