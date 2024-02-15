import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/home/Home.jsx';
import { AddBook } from '../components/pages/home/AddBook.jsx';
import { UpdateBook } from '../components/pages/home/UpdateBook.jsx';

export const AppRouter = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<AddBook />}></Route>
      <Route path='/update' element={<UpdateBook />}></Route>
    </Routes>
  );
};