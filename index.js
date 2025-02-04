import { renderStories } from '/components/stories/index.js'
import { STORIES_DATA } from '/components/stories/STORIES_DATA.js'

const posts = [
  {
    id: 'DELE_VGxNqM',
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: {
      id: 264723513,
      name: 'zundert',
    },
    avatar: 'img/posts/avatar-vangogh.jpg',
    post: 'img/posts/post-vangogh.jpg',
    caption: 'just took a few mushrooms lol',
    likedBy: ['theo1857', 'wil1862', 'breton1827'],
    date: '1889-08-09',
    commentsCount: 21,
  },
  {
    id: 'DEnNjwauCxm',
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: {
      id: 234319907,
      name: 'Ornans',
    },
    avatar: 'img/posts/avatar-courbet.jpg',
    post: 'img/posts/post-courbet.jpg',
    caption: "i'm feelin a bit stressed tbh",
    likedBy: ['baudelaire1821', 'bruyas1821', 'champfleury1821'],
    date: '1845-07-13',
    commentsCount: 4,
  },
  {
    id: 'DEf0URbpIFK',
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: {
      id: 6889842,
      name: 'paris',
    },
    avatar: 'img/posts/avatar-ducreux.jpg',
    post: 'img/posts/post-ducreux.jpg',
    caption:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likedBy: ['david1748', 'mehul1763', 'decreux1761'],
    date: '1793-11-20',
    commentsCount: 142,
  },
]

renderStories(STORIES_DATA)

function createPostElement(data) {
  const {
    id,
    name,
    username,
    location,
    avatar,
    post,
    caption,
    likedBy,
    date,
    commentsCount,
  } = data
  const postElement = document.createElement('article')
  postElement.classList.add('post')

  postElement.innerHTML = `<section class="user-info">
                <div class="user-info-container">
                    <div class="avatar-container">
                        <img class="avatar border-rad-circle" src="${avatar}" alt="${username}'s profile picture">
                    </div>
                    <div class="user-info-wrapper">
                        <a href="/${username}" class="user-fullname primary-font-color text-normal username ss-bold txt-decoration-none pointer">${name}</a>
                        <a href="/explore/locations/${location.id}/${
    location.name
  }" class="user-location ss-normal text-small primary-font-color txt-decoration-none">${capitalizeWord(
    location.name
  )}</a>
                    </div>
                </div>
                <button class="three-dots-icon primary-font-color interaction-opacity pointer btn-no-decoration">
                    <svg role="img" aria-labelledby="three-dots-icon-title" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <title id="three-dots-icon-title">More Options</title>
                        <circle cx="12" cy="5" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="12" cy="19" r="2"></circle>
                    </svg>
            </button>
            </section>
            <section class="post-image">
                <img src="${post}" alt="Post by ${username}">
                <div class="like-heart-container">
                    <svg class="like-heart" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
            </section>
            <section class="post-body">
                <div class="icons-container">
                    <div class="icons-wrapper">
                        <button class="like-icon primary-font-color interaction-opacity pointer btn-no-decoration">
                            <svg role="img" aria-labelledby="like-icon-title" width="24" height="24" viewBox="0 0 27 25"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title id="like-icon-title">Like</title>
                                <path
                                    d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z"
                                    stroke="currentcolor" stroke-width="2.32996" />
                            </svg>
                        </button>
                        <button class="comment-icon-and-count comment-icon primary-font-color interaction-opacity pointer btn-no-decoration">
                            <svg aria-labelledby="comment-icon-title" fill="currentColor" height="24" role="img"
                                viewBox="0 0 24 24" width="24">
                                <title id="comment-icon-title">Comment</title>
                                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                                    stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                            <span class="comments-count ss-bold">${commentsCount}</span>
                        </button>
                        <button class="share-icon primary-font-color interaction-opacity pointer btn-no-decoration">
                            <svg aria-labelledby="share-icon-title" width="24" height="24" viewBox="0 0 24 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <title id="share-icon-title">Share</title>
                                <path
                                    d="M9.65797 9.54347L11.8283 19.3097C11.9424 19.8236 12.6255 19.9344 12.8964 19.4831L22.8075 2.96445C23.0405 2.57621 22.7608 2.08228 22.308 2.08228H2.52787C1.98708 2.08228 1.73819 2.75508 2.14879 3.10702L9.65797 9.54347ZM9.65797 9.54347L22.0933 2.70404"
                                    stroke="currentcolor" stroke-width="2.32996" />
                            </svg>
                        </button>
                    </div>
                    <div class="save-post-container">
                        <button class="primary-font-color save-post-icon interaction-opacity pointer btn-no-decoration">
                            <svg aria-labelledby="save-post-icon-title" fill="currentColor" height="24" role="img"
                                viewBox="0 0 24 24" width="24">
                                <title id="save-post-icon-title">Save</title>
                                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="likedby-container ss-normal text-normal m-0 primary-font-color"></div>
                <div class="post-caption-container">
                    <p class="post-caption text-normal m-0 primary-font-color">
                        <a href="/${username}" class="username primary-font-color text-normal ss-bold txt-decoration-none pointer">${username}</a><span class="caption text-normal ss-normal">${caption}</span>
                    </p>
                </div>
                <div class="post-date-container">
                    <a href="/${username}/p/${id}" class="txt-decoration-none pointer"><time datetime="${date}" class="post-date secondary-font-color ss-normal text-small date-letter-spacing">${formatDateAsMonthDayYear(
    date
  )}</time></a>
                </div>
            </section>`

  const likedByContainer = postElement.querySelector('.likedby-container')
  const likedByElement = renderLikes(likedBy, id)
  likedByContainer.appendChild(likedByElement)

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

function setupEventListeners() {
  doubleClickPostHandler()
  likeIconClickHandler()
  savePostClickHandler()
}

function doubleClickPostHandler() {
  document.addEventListener('dblclick', event => {
    const imgContainer = event.target.closest('.post-image')
    if (imgContainer) {
      const post = imgContainer.closest('.post')
      const likeIcon = post.querySelector('.like-icon')
      setLikeStatus(likeIcon)
      triggerLikeAnimationOnPost(imgContainer)
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
  likeIcon.classList.remove('liked')
  setLikeIconAnimation(likeIcon)
}

function setLikeStatus(likeIcon) {
  setLikeIconAnimation(likeIcon)
  likeIcon.classList.add('liked')
}

function setLikeIconAnimation(likeIcon) {
  const isLiked = likeIcon.classList.contains('liked')

  isLiked
    ? triggerAnimation(likeIcon, 'click-like-icon-animate')
    : triggerAnimation(likeIcon, 'dbclick-post-animate')
}

function triggerAnimation(element, animationClass) {
  element.classList.remove(animationClass)
  void element.offsetWidth
  element.classList.add(animationClass)

  element.addEventListener('animationend', () => {
    element.classList.remove(animationClass)
  })
}

function triggerLikeAnimationOnPost(postImage) {
  const likeAnimation = postImage.querySelector('.like-heart')
  triggerAnimation(likeAnimation, 'animate')
}

function savePostClickHandler() {
  document.addEventListener('click', event => {
    const savePostIcon = event.target.closest('.save-post-icon')

    if (!savePostIcon) return

    const isSaved = savePostIcon.classList.contains('saved')

    isSaved ? removeSaveStatus(savePostIcon) : setSaveStatus(savePostIcon)
  })
}

function removeSaveStatus(icon) {
  icon.classList.remove('saved')
}

function setSaveStatus(icon) {
  icon.classList.add('saved')
}

function capitalizeWord(word) {
  const firstLetterToUpperCase = word.charAt(0).toUpperCase()
  const remainingWord = word.slice(1)

  return `${firstLetterToUpperCase}${remainingWord}`
}

setupEventListeners()

function getMonthNameFromNumber(monthAsNumber) {
  const MONTH_AS_TEXT = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }

  return MONTH_AS_TEXT[Number(monthAsNumber)]
}

function getNumberUnit(number) {
  const defaultValue = Number(number)
  const numberUnit = Number(String(number).slice(1))
  return defaultValue === numberUnit ? numberUnit : defaultValue
}

function formatDateAsMonthDayYear(date) {
  const [year, month, day] = String(date).split('-')
  const formattedDay = getNumberUnit(day)
  const formattedMonth = getMonthNameFromNumber(month)
  const formattedDate = `${formattedMonth} ${formattedDay}, ${year}`
  return formattedDate
}

function renderLikes(likedByArr, postId) {
  const likesWrapper = document.createElement('div')
  likesWrapper.classList.add('likes-wrapper')

  switch (likedByArr.length) {
    case 0:
      break
    case 1:
      likesWrapper.innerHTML = `Liked by <a class="ss-bold primary-font-color txt-decoration-none" href="/${likedByArr[0]}">${likedByArr[0]}</a>`
      break
    default:
      likesWrapper.innerHTML = `Liked by <a class="ss-bold primary-font-color txt-decoration-none" href="/${likedByArr[0]}">${likedByArr[0]}</a> and 
                <a class="ss-bold primary-font-color txt-decoration-none" href="/p/${postId}/liked-by/">others</a></div>`
  }

  return likesWrapper
}

