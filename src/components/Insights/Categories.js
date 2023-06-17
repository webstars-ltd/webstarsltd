import React, { useEffect } from "react"
import { storyblokEditable } from "@storyblok/js"

// import InsightList from "./InsightList"
const InsightList = React.lazy(() => import("./InsightList"))

const Categories = ({ blok, setCategoryTitle, categoryTitle, showMore }) => {
  const switchCategoryHandler = title => {
    if (title === categoryTitle) {
      setCategoryTitle("All")
      localStorage.setItem("title", "All")
    } else {
      setCategoryTitle(title)
      localStorage.setItem("title", title)
    }

    // const filtered = showMore && showMore.filter((story) => {
    //   console.log(story)
    //   originalStory = useStoryblok(story.node)
    //   console.log(originalStory)
    //   const filteredStory = originalStory.content.body.filter(
    //     childBlok =>
    //       childBlok.component === "insight_display" &&
    //       childBlok.insights[0].catgeory_name.length &&
    //       childBlok.insights[0].catgeory_name.includes(title)
    //   )

    //   return story
    // })

    // console.log(filtered)
  }

  // const filtereStory = () => {
  //   const filtered =
  //     showMore &&
  //     showMore.filter(story => {
  //       console.log(story)
  //       originalStory = useStoryblok(story.node)
  //       console.log(originalStory)

  //       return {}
  //       // const filteredStory = originalStory.content.body.filter(
  //       //   childBlok =>
  //       //     childBlok.component === "insight_display" &&
  //       //     childBlok.insights[0].catgeory_name.length &&
  //       //     childBlok.insights[0].catgeory_name.includes(title)
  //       // )

  //       // return story
  //     })
  // }

  // useEffect(() => {
  //   filtereStory()
  // }, [categoryTitle])

  return (
    <div {...storyblokEditable(blok)}>
      <section class="innerBanner all-insight-banner">
        <div class="container">
          <div class="insights-Banner">
            <div class="row">
              <div class="col-md-2">
                <div class="insights-Banner-cont">
                  <h6>{blok.title}</h6>
                </div>
              </div>

              <div class="col-md-10">
                <div class="insights-Banner-btn">
                  <ul>
                    {blok.category_list.map(category => (
                      <li
                        key={category.title}
                        className={
                          categoryTitle === category.title ? "current" : ""
                        }
                      >
                        <button
                          onClick={() => switchCategoryHandler(category.title)}
                        >
                          {category.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InsightList categoryTitle={categoryTitle} showMore={showMore} />
    </div>
  )
}

export default Categories
