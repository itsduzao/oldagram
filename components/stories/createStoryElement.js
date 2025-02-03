export function createStoryElement(storyData) {
  const { username, url } = storyData
  const storyContainer = document.createElement('div')
  storyContainer.classList.add('story-container')
  storyContainer.innerHTML = `<div class="story-item" aria-label="story by ${username}" role="menuitem" tabindex="0">
                        <div class="story-ring border-rad-circle size-sm" role="button" tabindex="-1">
                            <div class="story-gradient" tabindex="-1">
                            </div>
                            <div class="story-avatar-border pointer" tabindex="-1">
                                <div class="story-avatar" tabindex="-1">
                                    <img src="${url}" alt="${username}'s profile picture">
                                </div>
                            </div>
                        </div>
                        <div class="story-username text-small primary-font-color">${username}</div>
                    </div>`
  return storyContainer
}

