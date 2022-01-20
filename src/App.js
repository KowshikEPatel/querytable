 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import  RQSuperHeroesPage  from './Components/RQsuperheroes.page';
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
            <li>
              <Link to='/rqt-super-heroes'>RQT Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
          <Route path='/rqt-super-heroes' element={<RQSuperHeroesPage />}/>
          <Route path='/' element={<RQSuperHeroesPage />}/>
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
      </QueryClientProvider>
    </Router>
  )
}

export default App