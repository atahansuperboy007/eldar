import './style.css'
import ThreeCub from './comp/Three'
import TwoCub from './comp/Two'
import FormCub from './comp/Form'
import HardCub from './comp/Hard'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'
import DetailCubick from './comp/DetailCubick'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="main">


      <div className="container">
        <h1 className="magaz">Магазин профессиональных кубиков рубиков</h1>
        <BrowserRouter>
        <Navbar/>
          <header>
            <Link to='/home'>Главная</Link>
            <Link to='/three'>Кубики Рубика 3 на 3</Link>
            <Link to='/two'>Кубики Рубика 2 на 2</Link>
            <Link to='/form'>Кубики меняющие форму</Link>
            <Link to='/hard'>Сложнейшие головоломки</Link>
          </header>
          <Switch>
            <Route path='/three'>
              <ThreeCub />
            </Route>
            <Route path='/two'>
              <TwoCub />
            </Route>
            <Route path='/form'>
              <FormCub />
            </Route>
            <Route path='/hard'>
              <HardCub />
            </Route>
            <Route exact path ="/p/:id">
              <DetailCubick/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
