// Importing necessary modules from React Router
import { Routes, Route } from 'react-router-dom';
// Importing page components
import { Home } from '../components/pages/home/Home.jsx';
import { AddBook } from '../components/pages/home/AddBook.jsx';
import { UpdateBook } from '../components/pages/home/UpdateBook.jsx';

// Defining the AppRouter component
export const AppRouter = () => {
  return (
    // Rendering a <Routes> component from React Router
    <Routes>
      {/* Defining routes for different URLs */}
      {/* Route for the home page */}
      <Route path='/' element={<Home />} />
      {/* Route for adding a new book */}
      <Route path='/add' element={<AddBook />} />
      {/* Route for updating a book */}
      <Route path='/update' element={<UpdateBook />} />
    </Routes>
  );
};