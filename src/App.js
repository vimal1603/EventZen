import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3d42d72 (updated)
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Birthday from './Birthday/Birthday';
import Book from './Booking/Book';
import SignInSide from './SlideSide/SignInSide'
import SignUp from './Sign/SignUp';
import Corp from './Event/Corp';
import AboutUs from './Aboutus/Aboutus';
import ContactUs from './Contactus/ContactUs';
import Wed from './Wedding/Wed'
import WrappedComponent from './UseContext/WrappedComponent';
import Pricing from './Pricing/Pricing';
<<<<<<< HEAD
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Nav/>}>
        <Route index element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/wedding' element={<Wed/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/corporate' element={<Corp/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/home' element={<WrappedComponent/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 80c5d3d (Initialize project using Create React App)
=======
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Nav/>}>
        <Route index element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/wedding' element={<Wed/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/corporate' element={<Corp/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/home' element={<WrappedComponent/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
>>>>>>> 3d42d72 (updated)
  );
}

export default App;
