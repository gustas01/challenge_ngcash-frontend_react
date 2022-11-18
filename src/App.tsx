import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './Routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  return (
    <div className='container'>
      <BrowserRouter>
        <MyRoutes/>
        <ToastContainer position='top-right' autoClose={3000} className='toast-container'/>
      </BrowserRouter>
    </div>
  );
}

export default App;
