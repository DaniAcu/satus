// https://github.com/storyblok/storyblok-js-client
import { env } from 'env'
import StoryblokClient from 'storyblok-js-client'

class StoryblokApi extends StoryblokClient {
  constructor({ draft = false, ...props } = {}) {
    super({
      accessToken: draft
        ? env.STORYBLOK_PREVIEW_ACCESS_TOKEN
        : env.STORYBLOK_PUBLIC_ACCESS_TOKEN,
      region: 'us',
      ...props,
    })

    this.draft = draft
    this.version = draft ? 'draft' : 'published'
  }

  async get(path, params = {}, options = {}) {
    params.version = this.version

    if (this.draft || env.NODE_ENV === 'development') {
      options.cache = 'no-store'
    }
    return await super.get(path, params, options)
  }
}

export { StoryblokApi }
