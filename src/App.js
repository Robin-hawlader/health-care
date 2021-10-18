
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import AllServices from './Pages/Services/AllServices';
import Login from './Pages/Shared/Header/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Shared/Header/Login/PrivateRoute/PrivateRoute';
import Doctors from './Pages/Specialized/Doctors';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/service'>
              <AllServices></AllServices>
              <Footer></Footer>
            </Route>
            <Route path='/doctor'>
              <Doctors></Doctors>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/service/:detailId'>
              <ServiceDetail></ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
