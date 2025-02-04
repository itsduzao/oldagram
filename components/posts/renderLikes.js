export function renderLikes(likedByArr, postId) {
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

