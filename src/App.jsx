import { BrowserRouter as Router } from "react-router-dom";
import RoutesView from "./routes/RoutesView";


function App() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <RoutesView />
        </main>
      </div>
    </Router>
  );
}

export default App;
