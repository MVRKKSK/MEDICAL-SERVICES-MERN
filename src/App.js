
import './App.css';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
// import FrontPage from './components/FrontPage/FrontPage'
// import Services from './components/Services/Services'
// import Info from './components/Info/Info'
// import Footer from './components/Footer/Footer'
import landingPage from './Pages/landingpage'
import plasmadonor from './Pages/plasmadonor'
import hospitalbeds from './Pages/hospitalbeds'
import oxygensuppliers from './Pages/oxygensuppliers'
import medssuppliers from './Pages/medssuppliers';
import ambulanceprovider from './Pages/ambulanceproviders'


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={landingPage} />
        <Route path='/plasma' exact component={plasmadonor} />
        <Route path='/hospitalbeds' exact component={hospitalbeds} />
        <Route path='/oxygensupply' exact component={oxygensuppliers} />
        <Route path='/medssupply' exact component={medssuppliers} />
        <Route path='/ambulanceprovider' exact component={ambulanceprovider} />




        {/* <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
    
      
  


      // {/* Navbar  */}
      // <Navbar/>

      // {/* FrontPage   */}
      // <FrontPage/>

      // {/* services */}
      // <Services/>

      // {/* Info     */}
      // <Info/>

      // {/* Footer   */}
      // <Footer/>

   





   
  );
}

export default App;
