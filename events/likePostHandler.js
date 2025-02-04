export function likeIconClickHandler() {
  document.addEventListener('click', event => {
    const likeIcon = event.target.closest('.like-icon')

    if (!likeIcon) return

    const isLiked = likeIcon.classList.contains('liked')

    isLiked ? removeLikeStatus(likeIcon) : setLikeStatus(likeIcon)
  })
}

export function removeLikeStatus(likeIcon) {
  likeIcon.classList.remove('liked')
  setLikeIconAnimation(likeIcon)
}

export function setLikeStatus(likeIcon) {
  setLikeIconAnimation(likeIcon)
  likeIcon.classList.add('liked')
}

