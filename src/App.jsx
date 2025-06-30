import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Aranya/Dashboard";
import Plantsection from "./components/Plants/Plantssection"
import Potsdashboard from './components/Pots/PotsDashboard';






function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/plants' element={<Plantsection />} />
        <Route path='/pots' element={<Potsdashboard />} />
      </Routes>
    </Router>
  );
}

export default App;