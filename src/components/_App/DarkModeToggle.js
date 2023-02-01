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
          if (darkMode.value) {
            darkMode.disable()
          } else {
            darkMode.enable
          }
        }}
      >
        {darkMode.value ? "Switch to Dark" : "Switch to Light"}
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
