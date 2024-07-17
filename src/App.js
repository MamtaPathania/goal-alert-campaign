
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PlayPage from "./components/PlayPage";
import TermsPage from "./components/TermsPage";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/goal-alert" element={<HomePage/>}/>
        <Route path="/goal-alert/play" element={<PlayPage/>}/>
        <Route path="/goal-alert/terms" element={<TermsPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
