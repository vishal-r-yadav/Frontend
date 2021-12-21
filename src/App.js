
import './App.css';
// import ArrNumberComponent from './components/ArrNumberComponent';
// import Counter from './components/Counter';
import GetAllPolicy from './components/GetAllPolicy';
// import Greetings from './components/Greetings';
// import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GetPolicy from './components/GetPolicy';
import RegisterationForm from './components/RegisterationForm';
import Loginform from './components/Loginform';
import UpdatePolicy from './components/UpdatePolicy';
import DeletePolicy from './components/DeletePolicy';
function App() {
  return (
    // <div className="App">
    //   <h1>Demo App</h1>
    //   {/* <Counter/> */}
    //   {/* <GetAllPolicy/> */}
    //   {/* <Greetings role ={"admin"}/>
    //    <ArrNumberComponent/>     */}
    //    <Navbar/>
    // </div>
    <Router>
      <Routes>
      <Route path = '/'element = {<Dashboard/>}/>
      <Route path = "/policy/all" element = {<GetAllPolicy/>}/>
      <Route path = '/policy/details/:policyId' element = {<GetPolicy/>}/>
      <Route path = '/registeration' element ={<RegisterationForm/>}/>
      <Route path = '/adduser' element ={<Loginform/>}/>
      <Route path = '/policy/update/:policyId' element = {<UpdatePolicy/>}/>
      <Route path = '/policy/delete/:policyId' element = {<DeletePolicy/>}/>
      </Routes>
    </Router>
  );
}

export default App;
