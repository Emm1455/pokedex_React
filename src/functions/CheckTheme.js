function CheckTheme () {
  const themeConfig = JSON.parse(localStorage.getItem('themePreferences'))
  return themeConfig !== null ? themeConfig.theme : 'light';
}

export default CheckTheme
