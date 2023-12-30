import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = "chai or code";
const ReactElement = React.createElement(
  'a',
  { href: "a", target: "_blank" },
  "go to live in goggle",
  anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
  //  <App/>
)
