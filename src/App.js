import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home,Movies,NotFound,Search,Popular } from "./pages";
import { Footer,ShowMovie,Navbar, MovieDetails} from "./components";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<ShowMovie />} />
        <Route path="/show/:id" element={<MovieDetails />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
