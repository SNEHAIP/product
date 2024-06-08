import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Routes>
      <Route path='/'element={<AddProduct/>}/>
      <Route path='/Search'element={<SearchProduct/>}/>
      <Route path='/Delete'element={<DeleteProduct/>}/>
      <Route path='/View'element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
