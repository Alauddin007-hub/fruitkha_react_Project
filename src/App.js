import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Shoppage from './Pages/Shoppage';
import NewsPage from './Pages/NewsPage';
import SingleNewsPage from './Pages/SingleNewsPage';
import CheckOutPage from './Pages/CheckOutPage';
import Cart from './Pages/Cart';
import SingleProductPage from './Pages/SingleProductPage';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/single-news' element={<SingleNewsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/shop' element={<Shoppage />} />
            <Route path='/check-out' element={<CheckOutPage />} />
            <Route path='/single-product' element={<SingleProductPage />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
