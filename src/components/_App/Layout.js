import React from "react"
import DarkModeToggle from "./DarkModeToggle"
import { Script } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <DarkModeToggle />
      <Script id="privasee-cb" src="https://app.privasee.io/cdn/63628705d67de9001332dd71/cookie-banner.js" />
    </>
  )
}
export default Layout
