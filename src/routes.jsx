import {
    Routes,
    Route,
    BrowserRouter
  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function AppRoutes () {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;