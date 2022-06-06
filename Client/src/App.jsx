// import Login from './Auth/Login'
// import Register from './Auth/RegisterUser'
import './App.css'
import Dashboard from './Layout/Dashboard/Dashboard';
import { UserLogin } from './Auth/UserLogin';
import { UserRegister } from './Auth/UserRegister';

function App() {

  return (
    <div>
      <Dashboard />
      {/* <Login/> */}
      {/* <Register/> */}
      <UserLogin/>
      <UserRegister/>
    </div>
  );
}

export default App
