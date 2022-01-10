import { fetchPosts, fetchUsers } from "../data/provider.js"


export const Posts = async () => {
    let posts = await fetchPosts()
    const users = await fetchUsers()

        let html = "<section>"
                        
        const postsList = posts.map((post) => {
            const foundUser = users.find((user) => user.id === post.giffyUserId)
            return `<div id="${post.id}" class="blockPost">
            <p class="post__tagline">${post.title}</p>
            <P class= "entirePost"><img src="${post.URL}"</p>
            <p class="post__remark">${post.description}</p>
            <p class="post__remark">Posted by ${foundUser.username} on ${post.date}</p>
    
            </div>`
        })
        
        html += postsList.join("")
        html += "</section>"
        return html
        

}


