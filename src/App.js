 import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
  
function App() {
  return (
    <div>
      {/* react router */}
     <Router>
     <Header></Header> 
       <Switch> 
         <Route exact path="/">
           <Home></Home> 
         </Route>
         <Route path="/about">
          <About></About> 
         </Route>
         <Route path ="/services">
          <Services></Services>
         </Route>
         <Route path="/contact">
           <Contact></Contact>
           </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
