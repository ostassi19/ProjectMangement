import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login";
import ListeProject from "./Components/ListeProject";
import {Provider} from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/>}></Route>
          <Route path="/projects" element={ <ListeProject/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
