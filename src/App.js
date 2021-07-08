import React,{useState} from 'react'
// import Header from './components/Header'
import Card from './components/Card'
import { ThemeProvider } from 'styled-components'
import './styles/Header.scss'

import {light, dark} from './theme/theme'
import {GlobalStyle} from './theme/global'

export default function App() {
  const [theme, setTheme] = useState("dark");
    const themeToggler = ()=>{
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
    return (
        <ThemeProvider theme={theme === 'light' ? light: dark}>
            <GlobalStyle/>
            <header>
              <h2>Where in the world</h2>
              <button onClick={()=>{themeToggler()}} ><ion-icon name="moon"></ion-icon> </button>    
            </header>
            <Card/>
        </ThemeProvider>
    );
}
