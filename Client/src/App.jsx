import Siderbar from './Layout/Dashborad/Sidebar';
import Login from './Auth/Login'
import Register from './Auth/RegisterUser'
import './App.css'

function App() {


  return (
    <div>
      <Siderbar />
      <Login/>
      <Register/>
    </div>
  );
}

export default App
