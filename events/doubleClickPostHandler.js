import { triggerAnimation } from '../utils/animation.js'
import { setLikeStatus } from './likePostHandler.js'

export function doubleClickPostHandler() {
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

export function triggerLikeAnimationOnPost(postImage) {
  const likeAnimation = postImage.querySelector('.like-heart')
  triggerAnimation(likeAnimation, 'animate')
}

