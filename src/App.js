import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Main from './Routes/Layouts/Main/Main';
import router from './Routes/Router/Router';

function App() {
  return (
    <div className='font-mono max-w-[1350px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
