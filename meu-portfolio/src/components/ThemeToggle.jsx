function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  )
}

export default ThemeToggle
