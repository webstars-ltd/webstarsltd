import React from "react"
import useDarkMode from "use-dark-mode"

import Moon from "../../assets/images/moon.png"
import Sun from "../../assets/images/sun.png"

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
        {darkMode.value ? (
          <img src={Sun} height="75px" width="75px" />
        ) : (
          <img src={Moon} height="75px" width="75px" />
        )}
      </button>
    </div>
  )
}

export default DarkModeToggle
