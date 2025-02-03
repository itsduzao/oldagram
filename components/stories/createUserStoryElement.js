export function createUserStoryElement() {
  const userStory = document.createElement('div')
  userStory.classList.add('story-container')
  userStory.innerHTML = `<div class="no-story-item" role="menuitem" tabindex="0">
                        <div class="no-story-ring border-rad-circle size-sm" role="button" tabindex="-1">
                            <div class="story-avatar-border pointer">
                                <div class="story-avatar">
                                    <img src="img/user-avatar.jpg" alt="your profile picture">
                                </div>
                            </div>
                        </div>
                        <div class="story-username text-small primary-font-color">Your story</div>
                        <div role="button" class="publish-story-icon border-rad-circle pointer">
                            <svg class="pointer" aria-labelledby="publish-story-icon-title" fill="currentColor"
                                    height="16" role="img" viewBox="0 0 24 24" width="16">
                                <title id="publish-story-icon-title">Publish Story</title>
                                <path
                                        d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z">
                                </path>
                            </svg>
                        </div>
                    </div>`
  return userStory
}

