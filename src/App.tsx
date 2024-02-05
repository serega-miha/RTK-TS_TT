
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homePage/HomePage';
import HeroPage from './pages/heroPage/HeroPage';
import Page404 from './components/404/404';


function App() {
  return ( 
    <div className="App">
      <Header />
      <Routes>
        <Route path={''} element={<HomePage/>}/>
        <Route path={'/hero/:id'} element={<HeroPage/>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>

    </div>
  ); 
}

export default App;

