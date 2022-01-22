
import './App.css';
import Navbar from './components/Navbar/Navbar'
import FrontPage from './components/FrontPage/FrontPage'
import Services from './components/Services/Services'
function App() {
  return (
    <div className="App">
      {/* Navbar  */}
      <Navbar/>

      {/* FrontPage   */}
      <FrontPage/>

      {/* services */}
      <Services/>

      {/* Info     */}

      {/* Footer   */}
    </div>
  );
}

export default App;
