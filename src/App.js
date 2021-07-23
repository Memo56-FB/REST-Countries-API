import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Countries from './components/Countries'
import AboutCountry from './components/AboutCountry'
import Page404 from './components/Page404'

import './theme/globals.css'
import SwitchTheme from './theme/SwitchTheme'
import Header from './components/Header'

export default function App() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/countries">
            <Countries/>
          </Route>
          <Route exact path="/about">
            <AboutCountry/>
          </Route>
          <Route>
            <Page404/>
          </Route>
        </Switch>
      </Router>

    );
}
