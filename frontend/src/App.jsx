import { useState } from 'react';
import { FrappeProvider } from 'frappe-react-sdk'

import Home from './Pages/Home/Home';
import Countries from './Pages/Countries'
import NavbarComponent from './Components/NavbarComponent/NavbarComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import Universities from './Pages/Universities'
import University from './Pages/University'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import PageNotFound from './Pages/PageNotFound'
import ScrollToTop from './Components/ScrollToTop'
import Contactus from './Pages/Contactus/Contactus'
import Faq from './Pages/FAQ/Faq'
import Profile from './Pages/Profile/Profile'

import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
	const [show, setShow] = useState(true);

  return (
	<FrappeProvider>
		{show && <NavbarComponent />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home show={setShow} />} />
          <Route path="/countries" element={<Countries show={setShow} />} />
          <Route
            path="/universities"
            element={<Universities show={setShow} />}
          />
          <Route path="/university" element={<University show={setShow} />} />
          <Route path="/login" element={<Login show={setShow} />} />
          <Route path="/signup" element={<Signup show={setShow} />} />
          <Route
            path="/forgotpassword"
            element={<ForgotPassword show={setShow} />}
          />
          <Route path="/profile" element={<Profile show={setShow} />} />
          <Route path="/contactus" element={<Contactus show={setShow} />} />
          <Route path="/faq" element={<Faq />} show={setShow} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {show && <FooterComponent />}
	</FrappeProvider>
  )
}

export default App
