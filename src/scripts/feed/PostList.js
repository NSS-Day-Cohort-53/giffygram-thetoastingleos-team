import { fetchPosts, fetchUsers } from "../data/provider.js"


export const Posts = async () => {
    let posts = await fetchPosts()

        let html = "<ul>"
                        
        const postsList = posts.map((post) => {
            return `<li id="${post.id}" 
            <p class="post__tagline">${post.title}</p>
            <img src="${post.imageURL}" 
            <p class="post__remark">${post.description}</p>
            <p class="post__tagline">Posted by ${post.authorName} on ${post.timestamp}</p>
            
             </li>`
             
        })
        html += postsList.join("")
        html += "</ul>"
        return html
        

}


