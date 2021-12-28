
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import  HomePage  from './Components/Home.page'
import  RQSuperHeroesPage  from './Components/RQsuperheroes.page'
import  SuperHeroesPage  from './Components/Superheroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroesPage />}/>
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App