import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu';
import Routers from './routes/Routers';


function App() {
  return (
    <div className="App min-vh-100"
    style={{ 
      backgroundImage: `url('https://wallpaperaccess.com/full/2215049.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <>
      
        <Router>
          <Menu />
          <Routers />
        </Router>


      </>
    </div>
  );
}

export default App;
