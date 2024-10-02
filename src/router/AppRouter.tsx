import { Routes, Route } from 'react-router-dom';
import { Home, Themes } from '../pages';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/:theme' element={ <Themes/> }/>
    </Routes>
  )
}

export default AppRouter;
