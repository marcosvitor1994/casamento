import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu';
import Routers from './routes/Routers';
import MenuAdmin from './components/menuAdmin';


function App() {

  const role = sessionStorage.getItem('_role')

  const InterativeMenu = () => {
    console.log('1')
    if( role === 'Admin'){
        return <MenuAdmin />
    }
    return <Menu />
  }


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
          {InterativeMenu()}
          <Routers />
        </Router>


      </>
    </div>
  );
}

export default App;
