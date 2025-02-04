export function savePostClickHandler() {
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

