import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </Router>
  )
}

export default App