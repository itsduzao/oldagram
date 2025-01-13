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
                    <h2 class="user-fullname ss-bold text-normal fc-white">${name}</h2>
                    <p class="user-location ss-normal text-small fc-white">${location}</p>
                </div>
            </section>
            <section class="post-image">
                <img src="${post}" alt="Post by ${username}">
            </section>
            <section class="post-body">
                <div class="icons-container">
                    <div class="like-icon fc-white hover-opacity" tabindex="0">
                        <svg role="img" aria-labelledby="like-icon-title" width="24" height="24" viewBox="0 0 27 25"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title id="like-icon-title">A shape of heart</title>
                            <path
                                d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z"
                                stroke="currentcolor" stroke-width="2.32996" />
                        </svg>
                    </div>
                    <div class="comment-icon fc-white hover-opacity" tabindex="0">
                        <svg role="img" aria-labelledby="comment-icon-title" width="24" height="24" viewBox="0 0 25 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title id="comment-icon-title">A shape of dialog ballon</title>
                            <mask id="path-1-outside-1_7_48" maskUnits="userSpaceOnUse" x="0.299622" y="-0.318848"
                                width="24" height="24" fill="black">
                                <rect fill="white" x="0.299622" y="-0.318848" width="24" height="24" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.5903 18.2124C21.0601 16.564 21.9532 14.3903 21.9532 12.008C21.9532 6.85691 17.7775 2.68115 12.6264 2.68115C7.47538 2.68115 3.29962 6.85691 3.29962 12.008C3.29962 17.159 7.47538 21.3348 12.6264 21.3348C14.3983 21.3348 16.0548 20.8407 17.4656 19.9827L20.0909 20.5459L19.5903 18.2124Z" />
                            </mask>
                            <path
                                d="M19.5903 18.2124L17.8512 16.6619L17.0641 17.5447L17.3122 18.7011L19.5903 18.2124ZM17.4656 19.9827L17.9543 17.7046L17.0475 17.5101L16.255 17.992L17.4656 19.9827ZM20.0909 20.5459L19.6022 22.824L23.1246 23.5796L22.369 20.0572L20.0909 20.5459ZM19.6233 12.008C19.6233 13.7967 18.9551 15.4237 17.8512 16.6619L21.3294 19.763C23.165 17.7042 24.2832 14.9839 24.2832 12.008H19.6233ZM12.6264 5.01111C16.4907 5.01111 19.6233 8.14371 19.6233 12.008H24.2832C24.2832 5.57011 19.0643 0.351192 12.6264 0.351192V5.01111ZM5.62958 12.008C5.62958 8.14371 8.76218 5.01111 12.6264 5.01111V0.351192C6.18858 0.351192 0.969661 5.57011 0.969661 12.008H5.62958ZM12.6264 19.0048C8.76218 19.0048 5.62958 15.8722 5.62958 12.008H0.969661C0.969661 18.4458 6.18858 23.6647 12.6264 23.6647V19.0048ZM16.255 17.992C15.1987 18.6343 13.9594 19.0048 12.6264 19.0048V23.6647C14.8373 23.6647 16.9109 23.047 18.6763 21.9735L16.255 17.992ZM16.977 22.2609L19.6022 22.824L20.5795 18.2677L17.9543 17.7046L16.977 22.2609ZM22.369 20.0572L21.8685 17.7238L17.3122 18.7011L17.8127 21.0345L22.369 20.0572Z"
                                fill="currentcolor" mask="url(#path-1-outside-1_7_48)" />
                        </svg>
                    </div>
                    <div class="share-icon fc-white hover-opacity" tabindex="0">
                        <svg aria-labelledby="share-icon-title" width="24" height="24" viewBox="0 0 24 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <title id="share-icon-title">A shape of paper airplane</title>
                            <path
                                d="M9.65797 9.54347L11.8283 19.3097C11.9424 19.8236 12.6255 19.9344 12.8964 19.4831L22.8075 2.96445C23.0405 2.57621 22.7608 2.08228 22.308 2.08228H2.52787C1.98708 2.08228 1.73819 2.75508 2.14879 3.10702L9.65797 9.54347ZM9.65797 9.54347L22.0933 2.70404"
                                stroke="currentcolor" stroke-width="2.32996" />
                        </svg>
                    </div>
                </div>
                <p class="likes-counter ss-bold text-normal m-0 fc-white">${likes} likes</p>
                <div class="post-caption-container">
                    <p class="text-normal m-0 fc-white"><span class="username ss-bold">${username}</span> <span
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

