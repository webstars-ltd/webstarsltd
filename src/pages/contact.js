import React from "react"
// import NativeForms from "native-forms-react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

const NativeForms = React.lazy(() => import("native-forms-react"))

const ContactUs = () => {
  if (typeof window !== "undefined") {
    return (
      <Layout>
        <SEO
          title="Contact"
          description={
            "Webstars are experts in everything digital - from design and development, to strategy and ongoing support, we are a full-service agency here to bring your digital aspirations to life."
          }
        />
        <Navbar />
        {/* Body Component Starts here */}
        <div className="contact-us-container">
          <React.Suspense fallback={<></>}>
            <NativeForms
              form="https://form.nativeforms.com/JZDdV1jZm80UPJnWH1Db"
              onClose={result => console.log("on-close", result)}
              onSend={result => console.log("on-send", result?.form?.completed)}
            />
          </React.Suspense>
        </div>
        {/* Body Component Ends here */}
        <Footer />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO
          title="Contact Us"
          description={
            "Webstars are experts in everything digital - from design and development, to strategy and ongoing support, we are a full-service agency here to bring your digital aspirations to life."
          }
        />
        <Navbar />
        {/* Body Component Starts here */}
        <div className="contact-us-container" />
        {/* Body Component Ends here */}
        <Footer />
      </Layout>
    )
  }
}

export default ContactUs

// {showMore.length &&
//     showMore
//       .filter((originalStory, index) => (
//         <TestFile
//           key={index}
//           story={originalStory.node}
//           index={index}
//           categoryTitle={categoryTitle}
//         />
//       ))
//       .map((item, index) => (
//         <div
//           className="col-md-6 col-lg-6"
//           key={index}
//           id="undefined-content"
//         >
//           {item}
//         </div>
//       ))}

//       .map((item, index) => (
//                 <div
//                   className="col-md-6 col-lg-6"
//                   key={index}
//                   id="undefined-content"
//                 >
//                   {item}
//                 </div>
//               ))

//               import React from "react"

// // App level import statements
// import Layout from "../components/_App/Layout"
// import SEO from "../components/_App/seo"
// import Navbar from "../components/_App/Navbar"
// import Footer from "../components/_App/Footer"

// // const NativeForms = React.lazy(() => import("native-forms-react"))

// const ContactUs = () => {
//   return (
//     <Layout>
//       <SEO
//         title="Contact Us"
//         description={
//           "Webstars are experts in everything digital - from design and development, to strategy and ongoing support, we are a full-service agency here to bring your digital aspirations to life."
//         }
//       />
//       <Navbar />
//       {/* Body Component Starts here */}
//       {/* <React.Suspense fallback={<></>}> */}
//       <NativeForms
//         form="https://form.nativeforms.com/JZDdV1jZm80UPJnWH1Db"
//         onClose={result => console.log("on-close", result)}
//         onSend={result => console.log("on-send", result?.form?.completed)}
//       />
//       {/* </React.Suspense> */}
//       {/* Body Component Ends here */}
//       <Footer />
//     </Layout>
//   )
// }

// export default ContactUs

// import React from "react"
// import { storyblokEditable } from "@storyblok/js"

// import { useStoryblok } from "../../utils/storyblok"
// import DynamicListComponent from "./DynamicListComponent"

// const TestFile = ({ story, index, categoryTitle }) => {
//   let originalStory
//   originalStory = useStoryblok(story)
//   const filteredStory = originalStory.content.body.filter(
//     childBlok =>
//       childBlok.component === "insight_display" &&
//       childBlok.insights[0].catgeory_name.length &&
//       childBlok.insights[0].catgeory_name.includes(categoryTitle)
//   )

//   return filteredStory

//   //   const content =
//   //     originalStory.content.body &&
//   //     filteredStory.map(childBlok => (
//   //       <DynamicListComponent
//   //         blok={childBlok}
//   //         key={childBlok._uid}
//   //         slug={story.slug}
//   //         index={index}
//   //         categoryTitle={categoryTitle}
//   //       />
//   //     ))

//   //   return (
//   //     content.length && (
//   //       <div {...storyblokEditable(originalStory.content)}>{content}</div>
//   //     )
//   //   )
// }

// export default TestFile
