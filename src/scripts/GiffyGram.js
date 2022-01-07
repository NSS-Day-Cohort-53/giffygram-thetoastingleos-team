import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { Posts } from "./feed/PostList.js"

export const GiffyGram = async () => {

    // Show main main UI
    return `
    ${NavBar()}
    <section class="giffygram__feed">
    ${await Posts()}
    </section>
    <br>

    <footer class="foot"><div class="foot__content"></div>
    ${Footer()}
    </footer>`
}
