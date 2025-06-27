import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Dashboard from "./components/Aranya/Dashboard";
import Plantsection from "./components/Plants/Plantssection"





function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path='/plants' element={<Plantsection/>}/>
      </Routes>
    </Router>
  );
}

export default App;