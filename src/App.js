import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPagr';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"project",element:<Projects/>},
      {path:"contact",element:<Contact/>},
    ]
  }
])
function App() {
  return (
    <div className="App" >
          <RouterProvider router={router}/>
    </div>

  );
}

export default App;
