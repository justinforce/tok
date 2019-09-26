import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './components/App'

const Root = process.env.NODE_ENV === 'development' ? hot(App) : App

ReactDOM.render(<Root />, document.body)
