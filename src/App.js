import React,{useState} from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import {light, dark} from './theme/theme'
import {GlobalStyle} from './theme/global'

import Countries from './components/Countries'
import AboutCountry from './components/AboutCountry'

import './styles/Header.scss'

export default function App() {
  const [theme, setTheme] = useState("dark");
    const themeToggler = ()=>{
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
    return (
      <Router>
        <ThemeProvider theme={theme === 'light' ? light: dark}>
            <GlobalStyle/>
            <header>
              <h2>Where in the world</h2>
              <button onClick={()=>{themeToggler()}} ><ion-icon name="moon"></ion-icon> </button>    
            </header>
            {/* <Redirect exact from="/" to="/countries" /> */}
            <Switch>
              <Route exact path="/countries">
                <Countries/>
              </Route>
              <Route exact path="/about">
                <AboutCountry/>
              </Route>
            </Switch>
        </ThemeProvider>
      </Router>

    );
}
