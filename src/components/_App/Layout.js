import React from "react"
import DarkModeToggle from "./DarkModeToggle"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <DarkModeToggle />
    </>
  )
}
export default Layout
