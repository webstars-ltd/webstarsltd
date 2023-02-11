import React from "react"
import useDarkMode from "use-dark-mode"

export const darkMode = useDarkMode(false)

const DarkModeToggle = () => {
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
        <div className="toggle-icon">
          {!darkMode.value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="dark:hidden w-5 h-5 text-gray-800 dark:text-dark-contrastText "
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="tailwind-hidden dark:block w-5 h-5 text-gray-800 dark:text-dark-contrastText "
            >
              <path
                d="M10.5 7.2c1.81 0 3.3 1.49 3.3 3.3 0 1.81-1.49 3.3-3.3 3.3a3.31 3.31 0 0 1-3.3-3.3c0-1.81 1.49-3.3 3.3-3.3Zm0-2.2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2.86 11.45H.96A.96.96 0 0 1 0 10.5c0-.53.43-.95.95-.95h1.91c.53 0 .96.42.96.95s-.43.95-.96.95ZM20.05 11.45h-1.91a.96.96 0 0 1-.96-.95c0-.53.43-.95.96-.95h1.9c.53 0 .96.42.96.95s-.43.95-.95.95ZM9.55 2.86V.96c0-.53.42-.96.95-.96s.95.43.95.95v1.91c0 .53-.42.96-.95.96a.96.96 0 0 1-.95-.96ZM9.55 20.05v-1.91c0-.53.42-.96.95-.96s.95.43.95.96v1.9c0 .53-.42.96-.95.96a.96.96 0 0 1-.95-.95ZM3.42 3.42a.95.95 0 0 1 1.34 0l1.02 1c.37.37.36.98 0 1.36a.95.95 0 0 1-1.35 0L3.42 4.76a.95.95 0 0 1 0-1.34ZM15.22 15.22a.95.95 0 0 1 1.35 0l1.01 1.02a.95.95 0 1 1-1.34 1.34l-1.01-1a.95.95 0 0 1 0-1.35ZM17.58 3.42c.38.36.38.97 0 1.34l-1 1.02a.95.95 0 1 1-1.35-1.35l1-1.01a.95.95 0 0 1 1.35 0ZM5.78 15.22c.37.37.37.98 0 1.35l-1.02 1.01a.95.95 0 1 1-1.35-1.35l1.02-1a.95.95 0 0 1 1.35 0Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </div>
      </button>
    </div>
  )
}

export default DarkModeToggle
