import Button from '@material-ui/core/Button'
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import React, { useCallback, useState } from 'react'
import { lightGreen, deepOrange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: { primary: lightGreen, secondary: deepOrange }
})

const useStyles = makeStyles(() => ({
  accessTimeIcon: {
    marginRight: theme.spacing(1)
  }
}))

const App = () => {
  const classes = useStyles()
  const timerDisplayValue = '00:00'
  const [timerRunning, setTimerRunning] = useState(false)
  const [lastStart, setLastStart] = useState()
  const startInterval = useCallback(() => {})
  const startBreak = useCallback()
  const pause = useCallback()
  return (
    <MuiThemeProvider theme={theme}>
      <p>{timerDisplayValue}</p>
      <Button variant="contained" color="primary" onClick={startInterval}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        Start Interval
      </Button>
      <Button variant="contained" color="secondary" onClick={startBreak}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        Start Break
      </Button>
      <Button variant="contained" onClick={pause}>
        <AccessTimeIcon className={classes.accessTimeIcon} />
        Pause
      </Button>
    </MuiThemeProvider>
  )
}
export default App
