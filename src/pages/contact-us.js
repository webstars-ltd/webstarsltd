import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

const NativeForms = React.lazy(() => import("native-forms-react"))

const ContactUs = () => {
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
}

export default ContactUs
