// import Login from './Auth/Login'
// import Register from './Auth/RegisterUser'
import './App.css'
import Dashboard from './Layout/Dashboard/Dashboard';
import { UserLogin } from './Auth/UserLogin';
import { UserRegister } from './Auth/UserRegister';
import{BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
  
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserRegister/>}></Route>
      
      <Route path='/login' element={<UserLogin/>}></Route>
      
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
