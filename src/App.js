import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
/*<Route path="/"> <Home /> </Route> == 누군가 웹사이트의 "/" url에 있다면 <Home>을 render해라
 */

export default App;
