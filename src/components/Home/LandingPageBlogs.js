import React from 'react'
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import QueryComponent from './QueryComponent'

const LandingPageBlogs = ({ blok }) => {
    console.log(blok)
    const title = blok.blog_one

    console.log(title)

    return <QueryComponent title={title} />
}

export default LandingPageBlogs