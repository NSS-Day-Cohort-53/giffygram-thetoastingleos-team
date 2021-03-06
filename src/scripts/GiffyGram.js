import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { PostForm } from "./feed/PostForm.js"
import { Posts } from "./feed/PostList.js"

export const GiffyGram = async () => {

    
    return `
    ${NavBar()}
    
    <section>${PostForm()}</section>
    <section class="giffygram__feed">
    ${await Posts()}
    </section>
    
    <br>

    <footer class="foot"><div class="foot__content"></div>
    ${Footer()}
    </footer>`
}
