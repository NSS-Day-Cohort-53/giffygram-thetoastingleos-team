import { sendPost } from "../data/provider.js"
export const PostForm = () => {
    const postFormHTML = `
    <h3>Post Form</h3>
    <form>
        <input type="text" placeholder="Title" name="postTitle"></input>
        <input type="text" placeholder="Gif URL" name="gifURL"></input>
        <input type="text" placeholder="Description" name="postDescription"></input>
        <button class="button" id="submitPost">Submit Post</button>
    </form>    
    `
    return postFormHTML
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPost"){
        const userId = parseInt(localStorage.getItem("gg_user"))
        const postTitle = document.querySelector("input[name='postTitle']").value
        const gifURL = document.querySelector("input[name='gifURL']").value
        const postDescription = document.querySelector("input[name='postDescription']").value
        const timestamp = Date.now()

        const postObject = {
        giffyUserId: userId,
        title: postTitle,
        URL: gifURL,
        description: postDescription,
        date: timestamp
        }

        sendPost(postObject)
    }
})