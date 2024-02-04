
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homePage/HomePage';
import HeroPage from './pages/heroPage/HeroPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={''} element={<HomePage/>}/>
        <Route path={'/hero/:id'} element={<HeroPage/>}/>
        <Route path={'*'} element={<h2>Page not found</h2>}/>
      </Routes>
    </div>
  );
}

export default App;

