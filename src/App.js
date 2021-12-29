import './App.css';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import GetAllPolicy from './components/GetAllPolicy';
import GetPolicy from './components/GetPolicy';
import AddPolicy from './components/AddPolicy';
import Home from './components/pages/Home';
import AdminDashBoard from './components/pages/AdminDashBoard';
import AdminAddPolicy from './components/pages/AdminAddPolicy';
import AdminViewPolicy from './components/pages/AdminViewPolicy';
import AdminViewPolicyHolder from './components/pages/AdminViewPolicyHolder';





function App() {
  return (
    <div className="App">
      
    <Router>
   <Routes>
   <Route path = '/'element = {<Home/>}/>
   <Route path = '/admindashboard'element = {<AdminDashBoard/>}/>
   <Route path = '/policy/all'element = {<AdminViewPolicy/>}/>
   <Route path = '/policy/:policyId'element = {<GetPolicy/>}/>
   <Route path = '/addpolicy'element = {<AdminAddPolicy/>}/>
   <Route path = '/policyholder/all'element = {<AdminViewPolicyHolder/>}/>
   </Routes>
 </Router>
 </div>
  );
}

export default App;
