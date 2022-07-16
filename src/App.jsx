import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/auth/auth';
import Footer from './components/Footer/Footer';
import { Cart } from './pages/Cart/Cart';
import { store } from './redux';

import './App.scss';
import './utills/fonts';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Provider store={store} >   
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/cart" element={<Cart />} />     
            <Route path="/auth" element={<Auth />} />    
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
    </Provider>

  );
}

export default App;
