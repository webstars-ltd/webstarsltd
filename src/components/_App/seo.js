import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ metaTitle, description, lang, meta, title }) {
  const metaDescription = description
  const metaUrl = "http://webstarsltd.netlify.app/"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} - Webstars | B2B. Strategic. Expert.`}
      meta={[
        {
          name: "robots",
          content:
            "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        },
        {
          name: "google-site-verification",
          content: "jDRmiw0-iOUbfthBwFfbmp7pTyzNCZlzPNfCo-yL_0s",
        },
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        // {
        //   property: `og:image`,
        //   content: ogImage,
        // },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:domain`,
          content: `webstarsltd.netlify.app`,
        },
        {
          name: `twitter:url`,
          content: metaUrl,
        },
        // {
        //   property: `twitter:image`,
        //   content: ogImage,
        // },
      ].concat(meta)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
