import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css'
import AppHeader from './components/header';
import NovelsNavbar from './components/novels nav';
import NovelsPage from './components/novels page';
import { Container } from 'react-bootstrap';
import AppList from './components/product list'
import CheckoutPage from './components/CheckoutPage';
import ShoppingCart from './components/shopping cart';
// import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';





function App() {
  return (
    <div>
      <div>
      <div className='container fluid'>
        <NovelsPage />
      </div>

        <AppList />
      </div>
      {/* <div>
        <ShoppingCart />
      </div> */}
      <div>
        <CheckoutPage />
      </div>
      </div>
  )
      }
    export default App  