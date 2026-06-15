
const postsContainer = document.getElementById("posts")

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()

    console.log(posts);
    

    return posts 
}

function populatePosts(posts) {

  posts.forEach(post => {
      postsContainer.innerHTML += 
  `<div class="post"> 
    <h1 class="innerTitle"> ${post.title}</h1>
    <p> ${post.body} </p>
  </div>`
  });

} 

getPosts().then((posts) => populatePosts(posts));