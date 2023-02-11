import { useEffect, useState } from "react"
import { storyblokInit, apiPlugin, useStoryblokBridge } from "@storyblok/js"
import config from "../../gatsby-config"
const sbConfig = config.plugins.find(
  item => item.resolve === "gatsby-source-storyblok"
)

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
})

export const useStoryblok = originalStory => {
  const storyCopy = { ...originalStory }

  if (typeof storyCopy.content === "string")
    storyCopy.content = JSON.parse(storyCopy.content)

  console.log(storyCopy)

  // const modifiedId = storyCopy.uid.split("-")
  // storyCopy.id = parseInt(modifiedId[1])

  // let [story, setStory] = useState(storyCopy)

  // const BlokBrigdeConf = () => {
  //   useStoryblokBridge(story.id, newStory => setStory(newStory), {
  //     resolveRelations: ["posts-list.posts"],
  //   })
  // }

  // useEffect(() => {
  //   BlokBrigdeConf()
  // }, [])

  // return story
}