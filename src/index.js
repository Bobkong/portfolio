import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from './Components/HoverText/AnimatedCursor';
import AnimatedCursorProvider from './Components/HoverText/AnimatedCursorManager';

function Body() {
  return (
    <React.StrictMode>
      <AnimatedCursorProvider>
        <AnimatedCursor />
        <App />
      </AnimatedCursorProvider>
    </React.StrictMode>
  )
}

render(<Body />, document.querySelector('#root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
