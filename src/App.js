import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NoPage from './pages/noPage';
import {ShowMovie,MovieDetails, Footer,Navbar,Loader } from "./components";
import 'react-toastify/dist/ReactToastify.css';
const Home = lazy(() => import('./pages/home'))
const Movies = lazy(() => import('./pages/movies'))
const Search = lazy(() => import('./pages/search'))
function App() {
  return (
    <Router>
      <Navbar />
        <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" exact  element={<Movies />} />
          <Route path="/popular" exact  element={<Movies />} />
          <Route path="/search" exact  element={<Search />} />
          <Route path="/movie/:id" element={<ShowMovie />} />
          <Route path="/show/:id" element={<MovieDetails />} />
          <Route path="/error" element={<NoPage />} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
        </Suspense>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
