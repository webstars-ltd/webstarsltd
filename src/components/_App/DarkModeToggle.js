import React from "react"
import useDarkMode from "use-dark-mode"
import { Moon, Sun } from "react-feather"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="dark-mode-toggle">
      <button
        type="button"
        onClick={() => {
          if (darkMode.value === true) {
            darkMode.disable()
            localStorage.setItem("darkMode", "false")
          } else {
            darkMode.enable()
            localStorage.setItem("darkMode", "true")
          }
        }}
      >
        <div className="toggle-icon">{darkMode.value ? <Sun /> : <Moon />}</div>
      </button>
    </div>
  )
}

export default DarkModeToggle
