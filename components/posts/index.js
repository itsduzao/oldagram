import { createPostElement } from './createPostElement.js'

export function renderPosts(posts) {
  const postContainer = document.getElementById('post-container')
  postContainer.innerHTML = ''
  posts.forEach(post => {
    const postElement = createPostElement(post)
    postContainer.appendChild(postElement)
  })
}

