
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Header from './pages/Shared/Header/Header';
import Order from './pages/Order/Order';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './pages/MyOrders/MyOrders';
import AddService from './pages/AddService/AddService';
import Footer from './pages/Shared/Footer/Footer';
import OverView from './pages/Home/OverView/OverView';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/overview">
              <OverView></OverView>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addnewService">
              <AddService></AddService>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
