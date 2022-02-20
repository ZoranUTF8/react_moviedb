import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import NoPage from "./noPage";

function App() {
  return (
    <>
      <Router>
        {/* ADD LINK FOR OTHER APIS */}
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="#">API 1</Link>
          <Link to="#">API 2</Link>
        </nav> */}

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies/:movieId" element={<SingleMovie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        <footer>
          <h1>Footer</h1>
        </footer>
      </Router>
    </>
  );
}

export default App;
