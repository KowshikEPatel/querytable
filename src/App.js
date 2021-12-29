 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import  HomePage  from './Components/Home.page'
import  RQSuperHeroesPage  from './Components/RQsuperheroes.page';
import  SuperHeroesPage  from './Components/Superheroes.page';
import { QueryClientProvider,QueryClient } from 'react-query';

const queryClient = new QueryClient() 

function App() {

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
      </QueryClientProvider>
    </Router>
  )
}

export default App