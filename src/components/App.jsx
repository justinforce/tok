import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
  accessTimeIcon: {
    marginRight: theme.spacing(1)
  }
}))

const App = () => {
  const classes = useStyles()
  const [color, setColor] = useState('primary')
  const toggleColor = () => {
    const newColor = color === 'primary' ? 'secondary' : 'primary'
    setColor(newColor)
  }
  return (
    <>
      <Button variant="contained" color={color} onClick={toggleColor}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        tok
      </Button>
    </>
  )
}
export default App
