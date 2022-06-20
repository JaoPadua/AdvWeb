import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import Productlist from "./Pages/Productlist";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



const App = () =>{
  const user = true;
  return (
    
 <Router>
 <Switch>
 <Route exact path="/">
     <HomePage />
   </Route>
   <Route path="/products/:category">
     <Productlist />
   </Route>
   <Route  path="/product/:id">
     <Product />
   </Route>
   <Route  path="/cart">
     <Cart />
   </Route>
   <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
   <Route path="/register">
     {user ? <Redirect to="/" /> : <Register />}
   </Route>
   </Switch>
</Router>
  );
};

export default App;