
import './App.css';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboarduser from './pages/Dashboarduser';
import Dashboarduserhelp from './pages/Dashboarduserhelp';
import Dashboarduserpayments from './pages/Dashboarduserpayments';
import Dashboardnotification from './pages/Dashboardnotification';


function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact={true} component={Main} /> 
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/db-merchant-profile" component={Dashboarduser}/>
      <Route path="/db-merchant-user-help" component={Dashboarduserhelp}/>
      <Route path="/db-merchant-user-payments" component={Dashboarduserpayments}/>
      <Route path="/db-notification" component={Dashboardnotification}/>
    </div>
    </Router>
  );
}

export default App;
