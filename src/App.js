 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import  RQSuperHeroesPage  from './Components/RQsuperheroes.page';
import HDash from './Components/HDash';
import { QueryClientProvider,QueryClient } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <Link to='/hdash1'>Hiring dashboard</Link>
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
          <Route path='/hdash1' element={<HDash />}/>
          <Route path='/' element={<RQSuperHeroesPage />}/>
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
      </QueryClientProvider>
    </Router>
  )
}

export default App