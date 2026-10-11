const input = document.querySelector("#input_link");
const text = document.querySelector("#text");
const postsList = document.querySelector("#postsList")


function getData() {
fetch('https://6acbba18ef37b15040782799.mockapi.io/posts').then(response => response.json())
  .then(json => localStorage.setItem("posts", JSON.stringify(json)))
input.addEventListener("input", (e)=> {
    text.textContent = input.value
});
}

const posts = JSON.parse(localStorage.getItem("posts")) || []

htmlCreate(posts)

function htmlCreate(data) {
    const generateLi = data.map((post) => {
        return `<li class="post" id="${post.id}">
            <h1 class="post_title">${post.title}</h1>
            <p class="post_body">${post.body}</p>
            <button id="${post.id}" class="clear">DELETE</button>
        </li>`;
    }).join(" ")

    postsList.innerHTML = generateLi;
    
};

postsList.addEventListener("click", (e)=> {
    if(!e.target.classList.contains("clear")) return
    const postId = e.target.id;
    fetch(`https://6acbba18ef37b15040782799.mockapi.io/posts${postId}`, {
        method: "DELETE",
    })
    const deleteD = posts.filter((post) => {

        return post.id !== postId
    });
    localStorage.removeItem("posts");
    localStorage.setItem("posts", JSON.stringify(deleteD));
    htmlCreate(deleteD)
});

getData()