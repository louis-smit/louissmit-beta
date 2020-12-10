import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="px-2 py-1 text-sm w-24 rounded-md bg-gray-50 dark:bg-gray-1000 border-gray-300 dark:border-gray-600"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

const ThemeToggleDemo = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="px-1 py-1 rounded-md flex space-x-2 items-center border border-gray-200 dark:border-gray-600 w-32 bg-gray-50 dark:bg-gray-1000">
      <Icon>
        <>
          {theme === 'light' ? (
            <Light />
          ) : theme === 'dark' ? (
            <Dark />
          ) : (
            <System />
          )}
        </>
      </Icon>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="p-0 m-0 pl-2 pr-8 mr-0 border-none focus:ring-0 text-sm font-normal bg-gray-50 dark:bg-gray-1000"
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  )
}

const Icon = ({ children }) => (
  <div className="h-4 w-4 text-gray-900 dark:text-gray-100">{children}</div>
)

const Light = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

export const Dark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

export const System = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export default ThemeToggle
