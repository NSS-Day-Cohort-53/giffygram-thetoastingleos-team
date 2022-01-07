import { fetchPosts, fetchUsers } from "../data/provider.js"


export const Posts = async () => {
    let posts = await fetchPosts()
    const users = await fetchUsers()

        let html = "<ul>"
                        
        const postsList = posts.map((post) => {
            const foundUser = users.find((user) => user.id === post.giffyUserId)
            return `<li id="${post.id}">
            <p class="post__tagline">${post.title}</p>
            <img src="${post.URL}"/>
            <p class="post__remark">${post.description}</p>
            <p class="post__tagline">Posted by ${foundUser.username} on ${post.date}</p>
            </li>`
        })
        html += postsList.join("")
        html += "</ul>"
        return html

}


