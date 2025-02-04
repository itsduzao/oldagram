import { renderStories } from './components/stories/index.js'
import { STORIES_DATA } from './components/stories/STORIES_DATA.js'

import { renderPosts } from './components/posts/index.js'
import { POSTS_DATA } from './components/posts/POSTS_DATA.js'

import { doubleClickPostHandler } from './events/doubleClickPostHandler.js'
import { likeIconClickHandler } from './events/likePostHandler.js'
import { savePostClickHandler } from './events/savePostHandler.js'

renderStories(STORIES_DATA)

renderPosts(POSTS_DATA)

function setupEventListeners() {
  doubleClickPostHandler()
  likeIconClickHandler()
  savePostClickHandler()
}

setupEventListeners()

