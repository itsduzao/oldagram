export function setLikeIconAnimation(likeIcon) {
  const isLiked = likeIcon.classList.contains('liked')

  isLiked
    ? triggerAnimation(likeIcon, 'click-like-icon-animate')
    : triggerAnimation(likeIcon, 'dbclick-post-animate')
}

export function triggerAnimation(element, animationClass) {
  element.classList.remove(animationClass)
  void element.offsetWidth
  element.classList.add(animationClass)

  element.addEventListener('animationend', () => {
    element.classList.remove(animationClass)
  })
}

