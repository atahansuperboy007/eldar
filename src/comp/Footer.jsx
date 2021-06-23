import {BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Contact from './Contact'

function Footer() {
    return (
        <BrowserRouter>
        <Link to='/home'>Главная</Link>
        <Link to='/contact'>Контакты</Link>
        <Switch>
            <Route path='/contact'>
                <Contact/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Footer;