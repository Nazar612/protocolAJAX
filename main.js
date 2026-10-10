const input = document.querySelector("#input_link");
const text = document.querySelector("#text");
const postsList = document.querySelector("#postsList")
const postData = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
  .then(json => htmlCreate(json))
input.addEventListener("input", (e)=> {
    text.textContent = input.value
});

function htmlCreate(data) {
    const generateLi = data.map((post) => {
        return `<li class="post" id="${post.id} ${post.userId}">
            <h1 class="post_title">${post.title}</h1>
            <p class="post_body">${post.body}</p>
        </li>`;
    }).join(" ")

    postsList.innerHTML = generateLi

}