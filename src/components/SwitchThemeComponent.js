import Switch from '@mui/material/Switch'

function SwitchThemeComponent ({ state, handleChange }) {
  return (
    <Switch
      checked={state}
      onChange={handleChange}
    />
  )
}

export default SwitchThemeComponent
