import React from "react"
import { storyblokEditable } from "@storyblok/js"

import { useStoryblok } from "../../utils/storyblok"

// Page level import statements
import DynamicBlogComponent from "./DynamicBlogComponent"

const BlogListComponent = ({ story }) => {
  let originalStory
  originalStory = useStoryblok(story)

  const content =
    originalStory.content.body &&
    originalStory.content.body.map(childBlok => (
      <DynamicBlogComponent
        blok={childBlok}
        key={childBlok._uid}
        slug={story.slug}
      />
    ))

  return <div {...storyblokEditable(originalStory.content)}>{content}</div>
}

export default BlogListComponent
