import { createStoryElement } from '/components/stories/createStoryElement.js'
import { createUserStoryElement } from '/components/stories/createUserStoryElement.js'

export function renderStories(storyData) {
  const storiesSection = document.querySelector('section.stories')
  const storiesWrapper = storiesSection.querySelector('.stories-wrapper')
  storiesWrapper.innerHTML = ''

  const userStory = createUserStoryElement()
  storiesWrapper.appendChild(userStory)

  storyData.forEach(story => {
    const storyElement = createStoryElement(story)
    storiesWrapper.appendChild(storyElement)
  })
}

