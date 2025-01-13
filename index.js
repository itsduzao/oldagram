const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    caption: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    caption: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    caption:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
]

function createPostElement(data) {
  const { name, username, location, avatar, post, caption, likes } = data
  const postElement = document.createElement('article')

  postElement.classList.add('post')
  postElement.innerHTML = `<section class="user-info">
                <img class="avatar" src="${avatar}" alt="${username}'s profile picture">
                <div class="user-info-wrapper">
                    <h2 class="user-fullname ss-bold text-normal primary-font-color">${name}</h2>
                    <p class="user-location ss-normal text-small primary-font-color">${location}</p>
                </div>
            </section>
            <section class="post-image">
                <img src="${post}" alt="Post by ${username}">
            </section>
            <section class="post-body">
                <div class="icons-container">
                    <div class="like-icon primary-font-color hover-opacity" tabindex="0">
                        <svg role="img" aria-labelledby="like-icon-title" width="24" height="24" viewBox="0 0 27 25"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title id="like-icon-title">Like</title>
                            <path
                                d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z"
                                stroke="currentcolor" stroke-width="2.32996" />
                        </svg>
                    </div>
                    <div class="comment-icon primary-font-color hover-opacity" tabindex="0">
                        <svg aria-labelledby="comment-icon-title" fill="currentColor" height="24" role="img"
                            viewBox="0 0 24 24" width="24">
                            <title id="comment-icon-title">Comment</title>
                            <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                                stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </div>
                    <div class="share-icon primary-font-color hover-opacity" tabindex="0">
                        <svg aria-labelledby="share-icon-title" width="24" height="24" viewBox="0 0 24 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <title id="share-icon-title">Share</title>
                            <path
                                d="M9.65797 9.54347L11.8283 19.3097C11.9424 19.8236 12.6255 19.9344 12.8964 19.4831L22.8075 2.96445C23.0405 2.57621 22.7608 2.08228 22.308 2.08228H2.52787C1.98708 2.08228 1.73819 2.75508 2.14879 3.10702L9.65797 9.54347ZM9.65797 9.54347L22.0933 2.70404"
                                stroke="currentcolor" stroke-width="2.32996" />
                        </svg>
                    </div>
                </div>
                <p class="likes-counter ss-bold text-normal m-0 primary-font-color">${likes} likes</p>
                <div class="post-caption-container">
                    <p class="text-normal m-0 primary-font-color"><span class="username ss-bold">${username}</span> <span
                            class="post-caption ss-normal">${caption}</span>
                    </p>
                </div>
            </section>`

  return postElement
}

function renderPosts(posts) {
  const postContainer = document.getElementById('post-container')
  postContainer.innerHTML = ''
  posts.forEach(post => {
    const postElement = createPostElement(post)
    postContainer.appendChild(postElement)
  })
}

renderPosts(posts)

function setSvgIconColor(element, color) {
  if (hasChildElement(element, 'svg')) {
    const path = element.querySelector('path')

    path.setAttribute('fill', color)
    path.setAttribute('stroke', color)
  }
}

function removeSvgIconColor(element, color) {
  if (hasChildElement(element, 'svg')) {
    const path = element.querySelector('path')

    path.removeAttribute('fill')
    path.setAttribute('stroke', color)
  }
}

function hasChildElement(parent, childSelector) {
  return parent.querySelector(childSelector) !== null
}

function setupEventListeners() {
  doubleClickPostHandler()
  likeIconClickHandler()
}

function doubleClickPostHandler() {
  document.addEventListener('dblclick', event => {
    const imgContainer = event.target.closest('.post-image')
    if (imgContainer) {
      const post = imgContainer.closest('.post')
      const likeIcon = post.querySelector('.like-icon')
      setLikeStatus(likeIcon)
    }
  })
}

function likeIconClickHandler() {
  document.addEventListener('click', event => {
    const likeIcon = event.target.closest('.like-icon')
    if (!likeIcon) return

    const isLiked = likeIcon.classList.contains('liked')

    isLiked ? removeLikeStatus(likeIcon) : setLikeStatus(likeIcon)
  })
}

function removeLikeStatus(likeIcon) {
  removeSvgIconColor(likeIcon, 'currentColor')
  likeIcon.classList.remove('liked')
}

function setLikeStatus(likeIcon) {
  setSvgIconColor(likeIcon, 'var(--notification-red)')
  likeIcon.classList.add('liked')
}

setupEventListeners()

