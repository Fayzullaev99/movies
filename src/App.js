import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home,Movies,NotFound,Search,Serials } from "./pages";
import { Footer,MovieDetails,Navbar} from "./components";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/serials" element={<Serials />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<MovieDetails />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
