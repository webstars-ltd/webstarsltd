import React from "react"
import useDarkMode from "use-dark-mode"
import Toggle from "react-toggle"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="dark-mode-toggle">
      <button
        type="button"
        onClick={() => {
          console.log(darkMode.value)
          console.log(typeof darkMode.value)
          if (darkMode.value === "true") {
            darkMode.enable()
          } else {
            darkMode.disable()
          }
        }}
      >
        {darkMode.value ? "Switch to Light" : "Switch to Dark"}
      </button>
      {/* <Toggle
        checked={darkMode.value}
        onClick={!darkMode.value ? darkMode.enable : darkMode.disable}
      />
      <button type="button" onClick={darkMode.enable}>
        ☾☀
      </button> */}
    </div>
  )
}

export default DarkModeToggle
