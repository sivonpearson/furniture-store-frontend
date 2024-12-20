import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
import CatalogPage from './pages/CatalogPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
