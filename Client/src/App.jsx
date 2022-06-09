// import Login from './Auth/Login'
// import Register from './Auth/RegisterUser'
import './App.css'
import Dashboard from './Layout/Dashboard/Dashboard';
import { UserLogin } from './Auth/UserLogin';
import { UserRegister } from './Auth/UserRegister';
import{BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
<<<<<<< HEAD
  
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserRegister/>}></Route>
      
      <Route path='/login' element={<UserLogin/>}></Route>
      
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    
=======
    <div>
      <Dashboard />
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <UserLogin/> */}
    </div>
>>>>>>> 18031eac34504a1229883cf9a3a94529b6ae1a83
  );
}

export default App
